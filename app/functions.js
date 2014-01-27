if (typeof define !== 'function') { var define = require('amdefine')(module); }

define(function() {
  return {
    argsAsArray : function(fn, arr) {
        return fn.apply(null, arr);
    },

    speak : function(fn, obj) {
        return fn.bind(obj)();
    },

    functionFunction : function(str) {
        return function(str1) {
            return str+ ', ' +str1;
        }
    },

    makeClosures : function(arr, fn) {

    },

    partial : function(fn, str1, str2) {

    },

    useArguments : function() {
        // OPTION 1: use length property of arguments
        // var sum = 0,
        //     i = 0,
        //     n = arguments.length;

        // for(; i < n; i++)
        //     sum += arguments[i];

        // return sum;

        // OPTION 2: use ECMA5 array methods
        var args = [].slice.call(arguments); // true array
        return args.reduce(function(a, b) {
            return a + b;
        }, 0);
    },

    callIt : function(fn) {

    },

    partialUsingArguments : function(fn) {

    },

    curryIt : function(fn) {

    }
  };
});
