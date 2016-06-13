'use strict';

module.exports = function(grunt) {

    //Time how long tasks take. Can help when optimizing build times
    require('time-grunt')(grunt);

    //Automatically load required grunt tasks
    require('jit-grunt')(grunt);

    grunt.initConfig({

        pkg: grunt.file.readJSON('package.json'),

        jshint: {
            options: {
                jshintrc: '.jshintrc',
                reporter: require('jshint-stylish')
            },
            all: {
                src: [
                    'Gruntfile.js',
                    'app/scripts/{,*/}*.js'
                ]
            }
        },
    copy: {
      dist: {
        cwd: 'app',
        src: [ '**','!styles/**/*.css','!scripts/**/*.js' ],
        dest: 'dist',
        expand: true
      },
      fonts: {
          files:[
              {
                  //for bootstrap fonts
                    expand: true,
                    dot: true,
                    cwd: 'bower_components/bootstrap/dist',
                    src: ['fonts/*.*'],
                    dest: 'dist'
                }, {
                    //for font-awesome
                    expand: true,
                    dot: true,
                    cwd: 'bower_components/font-awesome',
                    src: ['fonts/*.*'],
                    dest: 'dist'
                }
          ]
        }
    },
    clean: {
        build:{
            src: [ 'dist/']
        }
    }

    });

    grunt.registerTask('build', [
        'clean',
        'jshint',
        'copy'
    ]);

    grunt.registerTask('default', ['build']);


};
