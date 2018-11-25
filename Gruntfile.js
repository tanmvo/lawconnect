'use strict';

module.exports = function(grunt) {
	grunt.initConfig({
		pkg: grunt.file.readJSON('package.json'),
		assemble: {
			options: {
		        flatten: true,
		        prettify: {
		          indent: 2,
		          condense: true,
		          newlines: true
		        },
		        assets: 'assets/',
		        helpers: 'src/templates/helpers/*.js',
		        partials: 'src/templates/includes/*.hbs',
		        layoutdir: 'src/templates/layouts',
		        layout: 'default.hbs',
		    },
	      	index: {
	      		files: {'dist/': ['src/index.hbs']},
	      		options: {
	      			partials: 'src/templates/partials/*.hbs',
	      		}
	      	},
		},
		clean: ['dist/**/*'],
		connect: {
			options: {
				port: 8000,
				livereload: 35729,
				hostname: 'localhost',
				open: {appName: 'Google Chrome'},
				base: ['dist/']
			},
			livereload: true,
		},
		copy: {
			js: {
				expand: true,
					cwd: 'src/js/',
					src: '*.js',
					dest: 'dist/',
					flatten: true,
			},
			img: {
				expand: true,
					cwd: 'src/img/',
					src: ['**/*'],
					dest: 'dist/images/',
					flatten: false,
			}
		},
		sass: {
            dist: {
                files: {
                    'dist/styles.css': 'src/sass/styles.scss'
                }
            }
        },
		watch: {
			options: {
					livereload: true,
				},
			hbs: {
				files: ['src/*.hbs', 'src/templates/**/*.hbs'],
				tasks: ['assemble'],
			},
			sass: {
				files: ['src/sass/*.scss', 'src/sass/partials/*.scss'],
				tasks: ['sass:dist'],
			},
			js: {
				files: ['src/js/*.js'],
				tasks: ['copy'],
			},
		},
	});
	// Load npm plugins to provide necessary tasks.
  	grunt.loadNpmTasks('assemble');
  	grunt.loadNpmTasks('grunt-contrib-clean');
  	grunt.loadNpmTasks('grunt-contrib-connect');
	grunt.loadNpmTasks('grunt-contrib-copy');
    grunt.loadNpmTasks('grunt-text-replace');
    grunt.loadNpmTasks('grunt-contrib-sass');
  	grunt.loadNpmTasks('grunt-contrib-watch');
      
  	grunt.registerTask('default', ['clean', 'copy', 'sass:dist', 'assemble']);
  	grunt.registerTask('serve', ['clean', 'copy', 'sass:dist', 'assemble', 'connect', 'watch']);
};