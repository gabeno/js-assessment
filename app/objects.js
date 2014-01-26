if (typeof define !== 'function') { var define = require('amdefine')(module); }

define(function() {
  return {
    alterContext : function(fn, obj) {
      return fn.bind(obj)(); // decorate obj w/ fn and call it
    },

    alterObjects : function(constructor, greeting) {
      return constructor.prototype.greeting = greeting;
    },

    iterate : function(obj) {
      var props = [];
      var keys = Object.keys(obj);

      for(var i = 0; i < keys.length; i++)
        props.push(keys[i] + ': ' + obj[keys[i]]);

      return props;
    }
  };
});
