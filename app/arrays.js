if (typeof define !== 'function') { var define = require('amdefine')(module); }

define(function() {
  return {
    indexOf : function(arr, item) {
        return arr.indexOf(item);
    },

    sum : function(arr) {
        // var i, sum = 0;
        // for (i = 0; i < arr.length; i++) {
        //     sum += arr[i];
        // }
        // return sum;
        
        return arr.reduce(function (a, b) {
            return a + b;
        }, 0);
    },

    remove : function(arr, item) {
        // walk through the array and delete any occurence of item
        // since Array.splice() returns a new array, indices are adjusted
        // so its best to consider the full length of the array and loop
        // downwards.
        for (var i = arr.length; i--; ) // i-- evaluates to falsy when it is zero
            if (arr[i] === item) arr.splice(i, 1);

        return arr;
    },

    removeWithoutCopy : function(arr, item) {
        var arrCopy = arr;
        var arr = this.remove(arr, item);

        return arrCopy;
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
    },

    square : function(arr) {
        return arr.map(function(item) {
            return item * item;
        });
    },

    findAllOccurrences : function(arr, target) {
        var idxs = [];

        for(var i = 0; i < arr.length; i++) {
            if (arr[i] === target)
                idxs.push(i);
        }

        return idxs;
    }
  };
});
