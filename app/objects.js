if (typeof define !== 'function') { var define = require('amdefine')(module); }

define(function() {
  return {
    alterContext : function(fn, obj) {
      return fn.bind(obj)(); // decorate obj w/ fn and call it
    },

    alterObjects : function(constructor, greeting) {

    },

    iterate : function(obj) {

    }
  };
});
