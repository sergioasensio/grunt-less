# grunt-less

Compile Less to CSS with Grunt
==============================

Create a package.json file
------------------------------------------------
Run Node.js (LTS version recommended) shell and move to your project folder, execute: $ npm init

A package.json must be created


Install grunt-cli and required packages and add them to package.json
------------------------------------------------
$ npm install -g grunt-cli

** If you already have your package.json with dependencies, execute:

$ npm install

** Otherwise, execute:

$ npm install grunt --save-dev

$ npm install grunt-contrib-less --save-dev

$ npm install grunt-contrib-watch --save-dev


Gruntfile.js
------------------------------------------------
```javascript
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
        spawn: true,
        livereload: true
      },
      styles: {
        files: ["less/**/*.less"],
        tasks: ["less:dev"],
        options: {
          atBegin: true,
          spawn: true
        }
      }
    }
  });
 
// Load plugins
grunt.loadNpmTasks("grunt-contrib-less");
grunt.loadNpmTasks("grunt-contrib-watch");

// Running in shell $ grunt for watching (development) task by default
grunt.registerTask('default', 'watch');
};
```
Files Location
------------------------------------------------
You must modify your name and location files according with you project structure:

```javascript
dev: {
        files: {"css/estilos.css": "less/main.less"}
      },
dist: 
        files: {"css/estilos.min.css": "less/main.less"}
      }
```

Execute grunt
------------------------------------------------
Execute this command for watching less changes:

$ grunt

or execute this other command:

$ grunt watch

Execute this command for minifying css:

$ grunt less:dist

