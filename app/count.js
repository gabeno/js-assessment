if (typeof define !== 'function') { var define = require('amdefine')(module); }

define(function () {
  return {
    count : function (start, end) {
      function Counter() {
        if (start <= end) {
          console.log(start);
        }
        start++;
        
        this.timerId = setTimeout(Counter, 100);
      }

      Counter.prototype.cancel = function() {
        clearTimeout(this.timerId);
      };
      
      return new Counter();
    }
  };
});