if (typeof define !== 'function') { var define = require('amdefine')(module); }

define(function() {
  return {
    valueAtBit: function(num, bit) {

    },

    base10: function(str) {
        return parseInt(str, 2);
    },

    convertToBinary: function(num) {
        // var bin = num.toString(2);
        // // pad to an 8-bit string
        // if (bin.length < 8) {
        //     bin = '00000000'.split('').slice(0, 8 - bin.length).join('') + bin;
        // }
        // return bin;

        var index, bitMask, bin = [];

        for(bitMask = 128, index = 0; bitMask > 0; bitMask >>= 1, index++)
            bin.push((bitMask & num) ? 1 : 0)

        return bin.join('');
    },

    multiply: function(a, b) {
        return (a * 10) * (b * 10) / 100;
    }
  };
});

