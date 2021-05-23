const fi = (function() {
  return {
    libraryMethod: function() {
      return 'Start by reading https://medium.com/javascript-scene/master-the-javascript-interview-what-is-functional-programming-7f218c68b3a0'
    },

    each: function(collection, callback) {
      let set = collection.constructor === Array ? collection : Object.values(collection)
      set.forEach(item => callback(item))
      return collection
    },

    map: function(collection, callback) {
      let set = collection.constructor === Array ? collection : Object.values(collection)
      let mapped = []
      set.forEach( i => mapped.push(callback(i)))
      return mapped
    },

    reduce: function(collection, callback, acc) {
      let total = !!acc ? acc : collection[0]
      for(let i = (!!acc) ? 0 : 1; i < collection.length; i++) {
         total = callback(total, collection[i], collection)
      }
      return total
    },

    find: function(collection, callback) {
      for (let c of collection){ if (callback(c)){ return c} }
    },

    filter: function(collection, callback) {
      let matches = []
      collection.forEach( c => { if (callback(c)){ matches.push(c)} } )
      return matches
    },

    size: function(collection) {
      let set = collection.constructor === Array ? collection : Object.values(collection)
      let counter = 0
      set.forEach( _ => counter += 1 )
      return counter
    },

    first: function(arr, n=1){
      let subset = []
      for(let i = 0; i < arr.length; i++){
        if (i < n){ subset.push(arr[i]) }
      }
      return subset.length === 1 ? subset.pop() : subset
    },

    last: function(arr, n=1){
      let subset = []
      for (let i = arr.length - n; i < arr.length; i++) {
        if (n > subset.length){ subset.push(arr[i]) }
      }
      return subset.length === 1 ? subset.pop(1) : subset
    },

    compact: function(arr){
      let values = []
      arr.forEach(a => { if (!!a){ values.push(a)} } )
      return values
    },

    sortBy: function(arr, callback){
      if (callback){
        return [...arr].sort((a,b) => { return callback(a) - callback(b) })
      }else{
        return [...arr].sort((a,b) => { return a - b })
      }
    },

    unpack: function(receiver, arr) {
      for (let val of arr){
        receiver.push(val)
      }
    },

    flatten: function(collection, shallow, newArr=[]) {
      if (typeof(collection) === 'number'){ return newArr.push(collection) }

      if (shallow) {
        for (let val of collection)
          Array.isArray(val) ? fi.unpack(newArr, val) : newArr.push(val)
      } else {
        for (let val of collection) {
          this.flatten(val, false, newArr)
        }
      }
      return newArr
    },

    uniq: function(arr, sorted=false, iteratee=false){
      let newArr = sorted ? arr : fi.sortBy(arr)
      const unique = []
      let match
      newArr.forEach(a => {
        if(!sorted){
          match = unique.find( i => i === a )
        }else{
          // match = unique.find( i => i === callback(a) )
        }
        if (!match) { unique.push(a) }
      })
      return unique
    }
  }
})()

fi.libraryMethod()
