module.exports = function(grunt) {
	grunt.loadNpmTasks('grunt-contrib-cssmin');
    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-contrib-watch');

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
        },
        watch: {
            scripts: {
                files: ['**/*.js'],
                tasks: ['start'],
                options: {
                    nospawn: true
                }
            }
        }
	});

    grunt.registerTask('generateTemplate', function() {
        require('templatizer')(__dirname + '/views/site', __dirname + '/public/javascripts/template.js');
    });

    grunt.registerTask('start', function() {
        grunt.util.spawn({
            cmd: 'node',
            args: ['app.js']
        });
        grunt.task.run('watch');
    });

	grunt.registerTask('default', [
        'generateTemplate',
        'cssmin',
        //'uglify',
        'start'
    ]);
};