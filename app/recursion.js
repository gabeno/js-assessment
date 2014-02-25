if (typeof define !== 'function') { var define = require('amdefine')(module); }

define(function() {
  return {
    listFiles: function(data, dirName) {
      var fileNames = [];

      /**
       * List all the files within a directory
       * @param  {[object]} obj [an object representing a directory]
       * @return {[undefined]}
       */
      function getDirContents(obj) {
        var contents = obj.files,
          len = contents.length;

        for (var i = 0; i < len; i++) {
          if (typeof contents[i] === 'string') {
            fileNames.push(contents[i]);
          }
          else {
            getDirContents(contents[i]);
          }
        }
      }

      /**
       * Get the directory data if name of the directory is specified
       * @return {[object]} [data of directory contents]
       */
      function getDir() {
        var dir;

        if (!dirName) {
          dir = data;
        } else {
          for (var i = 0; i < data.files.length; i++) {
            if (dirName && dirName === data.files[i].dir) {
              dir = data.files[i];
              break;
            }
          }
        }
        return dir;
      }

      getDirContents(getDir());

      return fileNames;
    },

    permute: function(arr) {
      // solution inspired by:
      // http://www.notesandreviews.com/programming/algorithm-to-generate-permutations-explained
      var i, j, m, len, ret = [];

      if (Array.isArray(arr))
        len = arr.length;

      if (len <= 1)
        return;

      // fanya mambo
    }
  };
});
