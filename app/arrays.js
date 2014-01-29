if (typeof define !== 'function') { var define = require('amdefine')(module); }

define(function() {
  return {
    indexOf : function(arr, item) {
        // if (Array.prototype.indexOf)
            return arr.indexOf(item);

        // solution
        // for(var i = 0, len = arr.length; i < len) {
        //     if (arr[i] === item) return 1;
        // }

        // return -1;
    },

    sum : function(arr) {
        var i, sum = 0;
        for (i = 0; i < arr.length; i++) {
            sum += arr[i];
        }
        return sum;
        
        // using ECMAScript5 method reduce()
        // return arr.reduce(function (a, b) {
        //     return a + b;
        // }, 0);
    },

    remove : function(arr, item) {
        // walk through the array and delete any occurence of item
        // since Array.splice() returns a new array, indices are adjusted
        // so its best to consider the full length of the array and loop
        // downwards.
        for (var i = arr.length; i--; ) // i-- evaluates to falsy when it is zero
            if (arr[i] === item) arr.splice(i, 1);

        return arr;

        // solution
        // var ret = [];

        // for (var i = 0, len = arr.length; i < len; i++) {
        //     if (arr[i] !== item) ret.push(arr[i]);
        // }

        // return ret;
    },

    removeWithoutCopy : function(arr, item) {
        var arr = this.remove(arr, item);
        return arr;

        // solution
        // var i, len;

        // for (i = 0, len = arr.length; i < len; i++) {
        //   if (arr[i] === item) {
        //     arr.splice(i, 1);
        //     i = i - 1;
        //     len = len - 1;
        //   }
        // }

        // return arr;
    },

    append : function(arr, item) {
        arr.push(item);
        return arr;
    },

    truncate : function(arr) {
        arr.pop();
        return arr;
    },

    prepend : function(arr, item) {
        arr.unshift(item);
        return arr;
    },

    curtail : function(arr) {
        arr.shift();
        return arr;
    },

    concat : function(arr1, arr2) {
        var arr = arr1.concat(arr2);
        return arr;
    },

    insert : function(arr, item, index) {
        arr.splice(index, 0, item);
        return arr;
    },

    count : function(arr, item) {
        var count = 0, i = 0;

        for(; i < arr.length; i++) {
            if (arr[i] === item)
                count++;
        }

        return count;
    },

    duplicates : function(arr) {
        var dups = [];

        for(var i = 0; i < arr.length; i++) {
             // check if value exists in another pos thats not current pos
            if ((arr.indexOf(arr[i]) !== -1 && arr.indexOf(arr[i]) !== i) &&
                dups.indexOf(arr[i]) === -1) // and not in dups
                dups.push(arr[i]);
        }

        return dups;

        // solution
        // var seen = {};
        // var dupes = [];

        // for (var i = 0, len = arr.length; i < len; i++) {
        //   seen[arr[i]] = seen[arr[i]] ? seen[arr[i]] + 1 : 1;
        // }

        // for (var item in seen) {
        //   if (seen.hasOwnProperty(item) && seen[item] > 1) {
        //     dupes.push(item);
        //   }
        // }

        // return dupes;
    },

    square : function(arr) {
        return arr.map(function(item) {
            return item * item;
        });

        // solution
        // var ret = [];

        // for (var i = 0, len = arr.length; i < len; i++) {
        //     ret.push(arr[i] * arr[i]);
        // }

        // return ret;
    },

    findAllOccurrences : function(arr, target) {
        var idxs = [];

        for(var i = 0; i < arr.length; i++) {
            if (arr[i] === target) idxs.push(i);
        }

        return idxs;
    }
  };
});
