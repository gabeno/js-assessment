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
        };
    },

    makeClosures : function(arr, fn) {
        var closures = [];

        for(var i = 0; i < arr.length; i++) {
            // OPTION 1:
            // (function(n){
            //     closures[i] = function() { // <= closure
            //         return fn(n);
            //     };
            // }(arr[i])); // pass in each value on iteration

            // OPTION 2:
            closures[i] = (function(n) {
                return function() { // <= closure
                    return fn(n);
                };
            }( arr[i] ));
        }

        return closures;
    },

    partial : function(fn, str1, str2) {
        // context 1 for arguments
        // cache them in an array except the first arg, fn
        var argsOuter = [].slice.call(arguments, 1);
        return function() {
            // context 2 for arguments from lambda function
            // cache all of them in an array
            var argsInner = [].slice.call(arguments);
            // combine all args into one array
            // set fn to invoke with the combined args
            var args = argsOuter.concat(argsInner);
            // 'this' is not set
            return fn.apply(null, args);
        };
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
