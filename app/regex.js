if (typeof define !== 'function') { var define = require('amdefine')(module); }

define(function() {
  return {
    containsNumber : function(str) {
        var pattern = /(\d)/;
        return pattern.test(str);
    },

    containsRepeatingLetter : function(str) {
        // var pattern = /([a-zA-Z])\1/; // solution
        var pattern = /(([a-z])\2)/i;
        //             ^^
        //             |+ group 2
        //             + group 1
        // capture matched part as group
        // ([a-z]) match any letter and capture as group 2
        // \2 back reference to the matched group, if character x matched, \2 matches another x
        // ([a-z])\2+ match repeating characters greedy (return match soonest)
        return pattern.test(str);
    },

    endsWithVowel : function(str) {
        var pattern = /[aeiou]$/i;
        return pattern.test(str);
    },

    captureThreeNumbers : function(str) {
        var pattern = /(\d){3}/;
        // var result = pattern.exec(str);
        var result = str.match(pattern);
        if (!result)
            return false;
        return result[0];

        // solution
        // var pattern = /\d{3}/
        // return result ? result[0] : false
    },

    matchesPattern : function(str) {
        // grouping not necessary
        // var pattern = /^\d{3}-\d{3}-\d{4}$/; // solution
        var pattern = /^(\d){3}-(\d){3}-(\d){4}$/;
        return pattern.test(str);
    },

    isUSD : function(str) {
        // var pattern = /^\$\d{1,3}(,\d{3})*(\.\d{2})?$/ // solution
        // get rid of groupings
        var pattern = /^\$(?:\d{1,3}){1}(?:,\d{3})*(?:\.\d{2})?$/;
        return pattern.test(str);
    }
  };
});
