Create a package.json file
******************************************************************
Run Node.js shell and move to your project folder, execute: $ npm init
A package.json must be created

Install Less if you don't have installed previously
******************************************************************
$ npm install -g less

Install grunt-cli and required packages and add them to package.json
******************************************************************
$ npm install -g grunt-cli
$ npm install grunt --save-dev
$ npm install grunt-contrib-less --save-dev
$ npm install grunt-contrib-watch --save-dev

** If you already have your package.json with dependencies, execute: $ npm install


Gruntfile.js
******************************************************************
module.exports = function (grunt) {
  // Grunt Configuration
  grunt.initConfig({
    less: {
      dev: {
        files: {"css/estilos.css": "less/main.less"}
      },
      dist: {
        options: {
          cleancss: true,
          compress: true,
          yuicompress: true,
          optimization: 2 },
        files: {"css/estilos.min.css": "less/main.less"}
      }
    },
    watch: {
      options: {
        spawn: false,
        livereload: true
      },
      styles: {
        files: ["less/**/*.less"],
        tasks: ["less:dev"],
        options: {spawn: false}
      }
    }
  });
 
// Load plugins
grunt.loadNpmTasks("grunt-contrib-less");
grunt.loadNpmTasks("grunt-contrib-watch");

// Running in shell $ grunt for watching (development) task by default
grunt.registerTask('default', 'watch');
};

Execute grunt
******************************************************************
Execute this command for watching less changes:   $ grunt 
or execute this other command:                    $ grunt watch
Execute this command for minifying css:           $ grunt less:dist


liveReload
******************************************************************
visit http://livereload.com/



