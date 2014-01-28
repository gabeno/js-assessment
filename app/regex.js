if (typeof define !== 'function') { var define = require('amdefine')(module); }

define(function() {
  return {
    containsNumber : function(str) {
        var pattern = /(\d+)/;
        return pattern.test(str);
    },

    containsRepeatingLetter : function(str) {

    },

    endsWithVowel : function(str) {
        var pattern = /[a,e,i,o,u]$/i;
        return pattern.test(str);
    },

    captureThreeNumbers : function(str) {

    },

    matchesPattern : function(str) {

    },
    isUSD : function(str) {

    }
  };
});
