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

    },

    removeWithoutCopy : function(arr, item) {

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

    },

    square : function(arr) {
        return arr.map(function(item) {
            return item * item;
        });
    },

    findAllOccurrences : function(arr, target) {

    }
  };
});
