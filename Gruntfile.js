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

// Running in shell >grunt , starts watch (development) task by default
grunt.registerTask('default', 'watch');
};