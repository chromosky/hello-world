module.exports = function(grunt){
    grunt.initConfig({
    	pkg: grunt.file.readJSON('package.json'),

    	copy: {
           t1: {
           	  src: 'dir_a/**',
           	  dest: 'dir_b/'
            }
      },

      sass: {
        options: {
          sourcemap: true
        },
        dist: {
          files: {
             'css/style.css': 'sass/style.scss'
          }
        }
      },

      imagemin: {                       
        dynamic: {                         
          files: [{
            expand: true,                  
            cwd: 'images/',                   
            src: ['**/*.{png,jpg,gif}'],   
            dest: 'images/build'                  
          }]
        }
      },

      watch: {
        scripts: {
          files: ['sass/*.sass'],
          tasks: ['sass'],
          options: {
            spawn: false,
          }
        }
      },
             
    })

    grunt.loadNpmTasks('grunt-contrib-copy');
    grunt.loadNpmTasks('grunt-sass');
    grunt.loadNpmTasks('grunt-contrib-imagemin');
    grunt.loadNpmTasks('grunt-contrib-watch');

    grunt.registerTask('default', ['sass', 'imagemin']);
};