if (typeof define !== 'function') { var define = require('amdefine')(module); }

define([ 'jquery' ], function($) {
  return {
    async : function(value) {
      var dfd = $.Deferred();
      return dfd.resolve(value);
    },

    manipulateRemoteData : function(url) {

    }
  };
});
