'use strict';

var LIVERELOAD_PORT = 35729;
var lrSnippet = require('connect-livereload')({port: LIVERELOAD_PORT});
var mountFolder = function (connect, dir) {
    return connect.static(require('path').resolve(dir));
};

module.exports = function (grunt) {
    require('load-grunt-tasks')(grunt);

    // configurable paths
    var appConfig = {
        app: 'app',
        dist: 'dist',
        test: 'tests',
        tmp: '.tmp'
    };

    grunt.initConfig({
        config: appConfig,
        watch: {
            sass: {
                files: ['<%= config.app %>/styles/{,*/}*.scss'],
                tasks: ['preprocss']
            },
            livereload: {
                options: {
                    livereload: LIVERELOAD_PORT
                },
                files: [
                    '<%= config.app %>/{,*/}**/*.html',
                    '<%= config.tmp %>/styles/{,*/}*.css',
                    '<%= config.app %>/scripts/{,*/}**/*.js',
                    '<%= config.app %>/images/{,*/}*.{png,jpg,jpeg,gif,webp,svg}'
                ]
            }
        },
        connect: {
            options: {
                port: 9000,
                hostname: 'localhost'
            },
            livereload: {
                options: {
                    middleware: function (connect) {
                        return [
                            lrSnippet,
                            mountFolder(connect, appConfig.tmp),
                            mountFolder(connect, appConfig.app)
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
                            mountFolder(connect, appConfig.tmp),
                            mountFolder(connect, appConfig.test),
                            mountFolder(connect, appConfig.app)
                        ];
                    }
                }
            },
            dist: {
                options: {
                    middleware: function (connect) {
                        return [
                            mountFolder(connect, appConfig.dist)
                        ];
                    }
                }
            }
        },
        clean: {
            dist: ['<%= config.tmp %>', '<%= config.dist %>/*'],
            tmp: '<%= config.tmp %>',
            style: '<%= config.tmp %>/styles'
        },
        jshint: {
            options: {
                jshintrc: '.jshintrc'
            },
            all: [
                'Gruntfile.js',
                '<%= config.app %>/scripts/{,*/}**/*.js',
                '<%= config.test %>/specs/{,*/}**/*.js'
            ]
        },
        csslint: {
            options: {
                csslintrc: '.csslintrc'
            },
            src: [
                '<%= config.tmp %>/styles/gallery.css'
            ]
        },
        scsslint: {
            allFiles: [
                '<%= config.app %>/styles/{,*/}**/*.scss'
            ]
        },
        sass: {
            styles: {
                options: {
                    style :'expanded',
                    lineNumbers: true
                },
                files: [{
                    expand: true,
                    cwd: '<%= config.app %>/styles',
                    src: ['gallery.scss'],
                    dest: '<%= config.tmp %>/styles',
                    ext: '.css'
                }]
            }
        },
        useminPrepare: {
            html: '<%= config.app %>/index.html',
            options: {
                dest: '<%= config.tmp %>'
            }
        },
        usemin: {
            html: ['<%= config.tmp %>/index.html'],
            css: ['<%= config.tmp %>/*.css'],
            options: {
                dirs: ['<%= config.tmp %>/scripts', '<%= config.tmp %>/styles']
            }
        },
        imagemin: {
            dist: {
                files: [{
                    expand: true,
                    cwd: '<%= config.app %>/images',
                    src: '{,*/}**/*.{png,jpg,jpeg}',
                    dest: '<%= config.dist %>/images'
                }]
            }
        },
        htmlmin: {
            options: {
                removeComments: true,
                removeCommentsFromCDATA: true,
                collapseWhitespace: true,
                collapseBooleanAttributes: true,
                removeAttributeQuotes: true,
                removeRedundantAttributes: true,
                useShortDoctype: true,
                removeEmptyAttributes: true,
                removeOptionalTags: true
            },
            views: {
                files: [
                    {
                        expand: true,
                        cwd: '<%= config.app %>',
                        src: ['views/**/*.html'],
                        dest: '<%= config.tmp %>'
                    }
                ]
            },
            main: {
                files: [
                    {
                        expand: true,
                        cwd: '<%= config.tmp %>',
                        src: ['*.html'],
                        dest: '<%= config.tmp %>'
                    }
                ]
            }
        },
        copy: {
            build: {
                files: [
                    {
                        expand: true,
                        dot: true,
                        cwd: '<%= config.app %>',
                        dest: '<%= config.tmp %>',
                        src: [
                            '*.html',
                            '*.{ico,txt}',
                            '.htaccess',
                            'font/**/*{eot,svg,ttf,woff}',
                            'images/{,*/}*.{gif,webp}'
                        ]
                    }
                ]
            },
            scripts: {
                files: [
                    {
                        expand: true,
                        dot: true,
                        cwd: '<%= config.app %>',
                        dest: '<%= config.tmp %>',
                        src: [
                            'scripts/**/*'
                        ]
                    }
                ]
            },
            dist: {
                files: [
                    {
                        expand: true,
                        dot: true,
                        cwd: '<%= config.tmp %>',
                        dest: '<%= config.dist %>',
                        src: [
                            '*.html',
                            '*.{ico,txt}',
                            '.htaccess',
                            'font/**/*',
                            'images/**/*',
                            'styles/*.gallery.css',
                            'scripts/*.scripts.js',
                            'scripts/*.vendor.js'
                        ]
                    }
                ]
            }
        },
        rev: {
            dist: {
                files: {
                    src: [
                        '<%= config.tmp %>/scripts/{,*/}*.js',
                        '<%= config.tmp %>/styles/{,*/}*.css'
                    ]
                }
            }
        },
        autoprefixer: {
            options: {
                browsers: ['last 2 versions']
            },
            appFile: {
                src: '<%= config.tmp %>/styles/gallery.css'
            }
        },
        karma: {
            unit: {
                configFile: 'karma-unit.js',
                singleRun: true
            }
        },
        ngmin: {
            dist: {
                files: [
                    {
                        expand: true,
                        cwd: '<%= config.tmp %>/concat/scripts',
                        src: ['**/scripts.js'],
                        dest: '<%= config.tmp %>/concat/scripts'
                    }
                ]
            }
        },
        html2js: {
            options: {
                base: '<%= config.tmp %>',
                module: 'Gallery.templates',
                quoteChar: '\'',
                useStrict: true
            },
            dist: {
                src: '<%= config.tmp %>/views/**/*.html',
                dest: '<%= config.tmp %>/scripts/template.js'
            }
//            test: {
//                options: {
//                    base: '<%= config.app %>'
//                },
//                src: '<%= config.app %>/js/**/*.tpl.html',
//                dest: '<%= config.tmp %>/js/partials.js'
//            },
        },
        uglify: {
            options: {
                mangle: false
            }
        }
    });

    grunt.registerTask('preprocss', ['clean:style', 'sass', 'autoprefixer']);

    grunt.registerTask('server', function(target) {
        if (target === 'dist') {
            return grunt.task.run(['build', 'connect:dist:keepalive']);
        }

        return grunt.task.run([
            'clean:tmp',
            'preprocss',
            'connect:livereload',
            'watch'
        ]);
    });

    grunt.registerTask('test', [
        'clean:tmp',
        'countImage',
        'connect:test',
        'karma:unit',
        'clean:tmp'
    ]);

    grunt.registerTask('build', [
        'clean:dist',
        'countImage',
        'preprocss',
        'useminPrepare',
        'imagemin',
        'copy:scripts',
        'htmlmin:views',
        'html2js:dist',
        'concat',
        'cssmin',
        'ngmin',
        'uglify',
        'copy:build',
        'rev',
        'usemin',
        'htmlmin:main',
        'copy:dist',
        'clean:tmp'
    ]);

    grunt.registerTask('default', [
        'countImage',
        'jshint',
        'test',
        'scsslint',
        'preprocss',
        'csslint'
    ]);

    grunt.registerTask('countImage', 'Count the number of image file available', function() {
        var app = grunt.config('config.app');
        var dst = app + '/scripts/imageCount.js';
        var src = app + '/imageCount.tpl';

        grunt.file.write(dst, grunt.template.process(grunt.file.read(src), {
            data: {
                collages: getSizeCount(app + '/images/collages/'),
                drawings: getSizeCount(app + '/images/drawings/'),
                pictures: getSizeCount(app + '/images/pictures/')
            }
        }));
    });

    function getSizeCount(uri) {
        return {
            card: grunt.file.expand(uri + 'card/*.jpg').length,
            full: grunt.file.expand(uri + 'full/*.jpg').length,
            slider: grunt.file.expand(uri + 'slider/*.jpg').length
        }
    }
};
