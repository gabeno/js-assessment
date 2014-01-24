if (typeof define !== 'function') { var define = require('amdefine')(module); }

/**
 * This file defines an object with some methods. Some of these methods are
 * populated incorrectly; your job is to fix them. Other methods are not
 * populated at all; your job is to fill them out.
 */
define(function() {
  return {
    globals : function() {
      // LESSON: always use var keyword
      // myObject = {
      //   name : 'Jory'
      // };
      var myObject = {
        name : 'Jory'
      };

      return myObject;
    },

    functions : function(flag) {
      function getValue() {
        if (flag)
          return 'a';
        else
          return 'b';
      }

      // LESSON: avoid using function declarations in control flow
      // if (flag) {
      //   function getValue() { return 'a'; }
      // } else {
      //   function getValue() { return 'b'; }
      // }

      return getValue();

      // official solution:
      // ------------------
      //
      // var getValue;
            
      // if (flag) {
      //   getValue = function() { return "a"; }
      // } else {
      //   getValue = function() { return "b"; }
      // }

      // return getValue();
    },

    parseInt : function(num) {
      // LESSON: avoid using parseInt() w/o radix
      // return parseInt(num);
      return parseInt(num, 10);
    },

    identity : function(val1, val2) {
      // LESSON: use strict comparison with vigour
      return val1 === val2;
    }
  };
});
