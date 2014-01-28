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
        var pattern = /^(\d){3}-(\d){3}-(\d){4}$/;
        return pattern.test(str);
    },

    isUSD : function(str) {
        var pattern = /^\$(?:[0-9]{1,3}){1}(?:,[0-9]{3})*(?:\.[0-9]{2})?$/;
        return pattern.test(str);
    }
  };
});
