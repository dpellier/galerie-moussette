module.exports = function(grunt) {
	grunt.loadNpmTasks('grunt-contrib-cssmin');
    grunt.loadNpmTasks('grunt-contrib-uglify');

	grunt.initConfig({
        uglify: {
            my_target: {
                files: {
                    './public/min.js': [
                        './public/javascripts/lib/jquery-1.8.2.min.js',
                        './public/javascripts/lib/underscore.js',
                        './public/javascripts/lib/*',
                        './public/javascripts/models/*.js',
                        './public/javascripts/views/*.js',
                        './public/javascripts/*.js'
                    ]
                }
            }
        },
        cssmin: {
            combine: {
                files: {
                    './public/min.css': './public/stylesheets/*.css'
                }
            }
        }
	});

    grunt.registerTask('generateTemplate', function() {
        require('templatizer')(__dirname + '/views/site', __dirname + '/public/javascripts/template.js');
    });

	grunt.registerTask('default', [
        'generateTemplate',
        'cssmin',
        'uglify'
    ]);
};