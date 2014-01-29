if (typeof define !== 'function') { var define = require('amdefine')(module); }

define([ 'jquery' ], function($) {
  return {
    async : function(value) {
      var dfd = $.Deferred();
      return dfd.resolve(value);
    },

    manipulateRemoteData : function(url) {

      var dfd = $.Deferred();

      $.ajax(url).then(function(resp) {
        var people = $.map(resp.people, function(person) {
          return person.name;
        });
        dfd.resolve(people.sort());
      });

      return dfd.promise();
    }
  };
});
