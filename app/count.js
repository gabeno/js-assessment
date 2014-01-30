if (typeof define !== 'function') { var define = require('amdefine')(module); }

define(function () {
  return {
    count : function (start, end) {
      function Counter() { // stateful
        console.log(start++);
        
        if (start <= end) {
          this.timerId = setTimeout(Counter, 100);
        }
      }

      Counter.prototype.cancel = function() {
        clearTimeout(this.timerId);
      };
      
      return new Counter();

      // official solution
      // var timeout;
      // function doIt () {
      //   console.log(start++);

      //   if (start <= end) {
      //     timeout = setTimeout(doIt, 100);
      //   }
      // }

      // doIt();

      // return {
      //   cancel : function () {
      //     timeout && clearTimeout(timeout);
      //   }
      // };
    }
  };
});