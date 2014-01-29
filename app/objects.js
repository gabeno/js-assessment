if (typeof define !== 'function') { var define = require('amdefine')(module); }

define(function() {
  return {
    alterContext : function(fn, obj) {
      return fn.bind(obj)(); // decorate obj w/ fn and call it
      // return fn.call(obj);
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

      // solution
      // var ret = [];

      // for (var prop in obj) {
      //   if (obj.hasOwnProperty(prop)) {
      //     ret.push(prop + ': ' + obj[prop]);
      //   }
      // }

      // return ret;
    }
  };
});
