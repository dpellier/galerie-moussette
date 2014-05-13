'use strict';

var LIVERELOAD_PORT = 35729;
var SERVER_PORT = 9000;
var lrSnippet = require('connect-livereload')({port: LIVERELOAD_PORT});
var mountFolder = function (connect, dir) {
    return connect.static(require('path').resolve(dir));
};

// # Globbing
// for performance reasons we're only matching one level down:
// 'test/spec/{,*/}*.js'
// use this if you want to match all subfolders:
// 'test/spec/**/*.js'
// templateFramework: 'lodash'

module.exports = function (grunt) {
    require('load-grunt-tasks')(grunt);

    // configurable paths
    var yeomanConfig = {
        app: 'app',
        dist: 'dist'
    };

    grunt.initConfig({
        yeoman: yeomanConfig,
        watch: {
            options: {
                nospawn: true,
                livereload: true
            },
            compass: {
                files: ['<%= yeoman.app %>/design/styles/{,*/}*.{scss,sass}'],
                tasks: ['preprocss']
            },
            livereload: {
                options: {
                    livereload: LIVERELOAD_PORT
                },
                files: [
                    '<%= yeoman.app %>/*.html',
                    '{.tmp,<%= yeoman.app %>}/styles/{,*/}*.css',
                    '{.tmp,<%= yeoman.app %>}/scripts/{,*/}*.js',
                    '<%= yeoman.app %>/design/images/{,*/}*.{png,jpg,jpeg,gif,webp}',
                    '<%= yeoman.app %>/scripts/templates/*.ejs',
                    'test/spec/**/*.js'
                ]
            }
        },
        connect: {
            options: {
                port: SERVER_PORT,
                hostname: 'localhost'
            },
            livereload: {
                options: {
                    middleware: function (connect) {
                        return [
                            lrSnippet,
                            mountFolder(connect, '.tmp'),
                            mountFolder(connect, yeomanConfig.app)
                        ];
                    }
                }
            },
            test: {
                options: {
                    port: 9001,
                    middleware: function (connect) {
                        return [
                            lrSnippet,
                            mountFolder(connect, '.tmp'),
                            mountFolder(connect, 'test'),
                            mountFolder(connect, yeomanConfig.app)
                        ];
                    }
                }
            },
            dist: {
                options: {
                    middleware: function (connect) {
                        return [
                            mountFolder(connect, yeomanConfig.dist)
                        ];
                    }
                }
            }
        },
        open: {
            server: {
                path: 'http://localhost:<%= connect.options.port %>'
            }
        },
        clean: {
            dist: ['.tmp', '<%= yeoman.dist %>/*'],
            server: '.tmp',
            style: '.tmp/styles'
        },
        jshint: {
            options: {
                jshintrc: '.jshintrc',
                reporter: require('jshint-stylish')
            },
            all: [
                'Gruntfile.js',
                '<%= yeoman.app %>/scripts/{,*/}*.js',
                'test/spec/{,*/}*.js'
            ]
        },
        jasmine: {
            all:{
                src : '/scripts/{,*/}*.js',
                options: {
                    keepRunner: true,
                    specs : 'test/spec/**/*.js',
                    vendor : [
                        '<%= yeoman.app %>/bower_components/jquery/jquery.js',
                        '<%= yeoman.app %>/bower_components/underscore/underscore.js',
                        '<%= yeoman.app %>/bower_components/backbone/backbone.js',
                        '.tmp/scripts/templates.js'
                    ]
                }
            }
        },
        compass: {
            options: {
                sassDir: '<%= yeoman.app %>/design/styles',
                cssDir: '.tmp/styles',
                imagesDir: '<%= yeoman.app %>/design/images',
                javascriptsDir: '<%= yeoman.app %>/scripts',
                fontsDir: '<%= yeoman.app %>/design/styles/fonts',
                importPath: '<%= yeoman.app %>/bower_components',
                relativeAssets: true
            },
            dist: {},
            server: {
                options: {
                    debugInfo: true
                }
            }
        },
        useminPrepare: {
            html: '<%= yeoman.app %>/index.html',
            options: {
                dest: '<%= yeoman.dist %>'
            }
        },
        usemin: {
            html: ['<%= yeoman.dist %>/{,*/}*.html'],
            css: ['<%= yeoman.dist %>/styles/{,*/}*.css'],
            options: {
                dirs: ['<%= yeoman.dist %>']
            }
        },
        imagemin: {
            dist: {
                files: [{
                    expand: true,
                    cwd: '<%= yeoman.app %>/design/images',
                    src: '{,*/}*.{png,jpg,jpeg}',
                    dest: '<%= yeoman.dist %>/design/images'
                }]
            }
        },
        cssmin: {
            server: {
                files: {
                    '.tmp/styles/app.css': ['.tmp/styles/{,*/}*.css']
                }
            },
            dist: {
                files: {
                    '<%= yeoman.dist %>/styles/app.css': [
                        '.tmp/styles/{,*/}*.css',
                        '<%= yeoman.app %>/design/styles/{,*/}*.css'
                    ]
                }
            }
        },
        htmlmin: {
            dist: {
                options: {
                    /*removeCommentsFromCDATA: true,
                    // https://github.com/yeoman/grunt-usemin/issues/44
                    //collapseWhitespace: true,
                    collapseBooleanAttributes: true,
                    removeAttributeQuotes: true,
                    removeRedundantAttributes: true,
                    useShortDoctype: true,
                    removeEmptyAttributes: true,
                    removeOptionalTags: true*/
                },
                files: [{
                    expand: true,
                    cwd: '<%= yeoman.app %>',
                    src: '*.html',
                    dest: '<%= yeoman.dist %>'
                }]
            }
        },
        copy: {
            dist: {
                files: [{
                    expand: true,
                    dot: true,
                    cwd: '<%= yeoman.app %>',
                    dest: '<%= yeoman.dist %>',
                    src: [
                        '*.{ico,txt}',
                        '.htaccess',
                        'design/images/{,*/}*.{webp,gif}',
                        'design/styles/fonts/{,*/}*.*',
                        'bower_components/sass-bootstrap/fonts/*.*'
                    ]
                }]
            }
        },
        bower: {
            all: {
                rjsConfig: '<%= yeoman.app %>/scripts/main.js'
            }
        },
        rev: {
            dist: {
                files: {
                    src: [
                        '<%= yeoman.dist %>/scripts/{,*/}*.js',
                        '<%= yeoman.dist %>/design/styles/{,*/}*.css',
                        '<%= yeoman.dist %>/design/images/{,*/}*.{png,jpg,jpeg,gif,webp}',
                        '/design/styles/fonts/{,*/}*.*',
                        'bower_components/sass-bootstrap/fonts/*.*'
                    ]
                }
            }
        },
        autoprefixer: {
            options: {
                browsers: ['last 2 versions']
            },
            '.tmp/styles/app.css': ['.tmp/styles/app.css']
        }
    });

    grunt.registerTask('preprocss', ['clean:style', 'compass:server', 'cssmin:server', 'autoprefixer']);

    grunt.registerTask('server', function(target) {
        if (target === 'dist') {
            return grunt.task.run(['build', 'open', 'connect:dist:keepalive']);
        }

        if (target === 'test') {
            return grunt.task.run([
                'clean:server',
                'preprocss',
                'connect:test',
                'watch:livereload'
            ]);
        }

        return grunt.task.run([
            'clean:server',
            'preprocss',
            'connect:livereload',
            //'open',
            'watch'
        ]);
    });

    grunt.registerTask('test', [
        'clean:server',
        'compass',
        'jasmine',
        'watch:test'
    ]);

    grunt.registerTask('build', [
        'clean:dist',
        'coffee',
        'compass:dist',
        'useminPrepare',
        'imagemin',
        'htmlmin',
        'concat',
        'cssmin:dist',
        'uglify',
        'copy',
        'rev',
        'usemin'
    ]);

    grunt.registerTask('default', [
        'jshint',
        'test',
        'build'
    ]);
};
