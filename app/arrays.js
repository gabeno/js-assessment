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

    },

    truncate : function(arr) {

    },

    prepend : function(arr, item) {

    },

    curtail : function(arr) {

    },

    concat : function(arr1, arr2) {

    },

    insert : function(arr, item, index) {

    },

    count : function(arr, item) {

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
