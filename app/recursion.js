recursionAnswers = {
  /**
   * List the files in a given directory, of a filesystem described by data.
   * Data is an object that looks like this:
   * {
      dirName: 'app',
      files: ['index.html', 'page.html'],
      subDirs: [{...}]
      }
   *
   * Where ... is the same type of object
   * 
   * @param {fileSystemObject} data - a file system object as described above
   * @param {String} dirName - a directory name the files are desired to be listed from.
   * Note: This parameter is optional. If it is not provided, list ALL files.
   * 
   * @returns {Number[]} The files under the directory dirName, including subdiretories.
   */
  listFiles: function listFiles(data, dirName) {
    var filesToShow = [];
    var folders = [];
    var file;
    makeDir(data);
     
    // MAKE the directory
    function makeDir(dir) {
      
      var files = dir.files;
      folders.push( dir.dir );
      // GET the files 
      for ( var i = 0; i < files.length; i++) {
        file = files[i];
        if (typeof file === 'string') {
          if (!dirName || folders.indexOf(dirName) > -1) {
            filesToShow.push(files[i]);
          }
        } else {
          makeDir(files[i]);
        }
      }

       folders.pop();
    }

    
    return filesToShow;

  },

  /**
   * Determines the fibonacci number at position n.
   * https://en.wikipedia.org/wiki/Fibonacci_number
   * 
   * The first few fibonacci numbers are: 1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89, ...
   * 
   * @param {Number} n - the index of the fibonacci number desired
   * @returns {Number} The nth fibonacci number
   */
  fibonacci: function fibonacci(n) {
    
    var num = 50;
    var a = [];

    // Create the FIBONACCI sequence
    function fib (num){
      for( a = [0,1], i = 0, j = 1, k = 0; k < num; i = j, j = x, k++ ){
        x = i + j;
        a.push(x);
      }
      
    }
    fib(num);

    
    // GET th nth and send results
    return a[n];

  },
};