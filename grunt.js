module.exports = function(grunt) {
	grunt.loadNpmTasks('grunt-contrib-mincss');
	grunt.loadNpmTasks('grunt-jsmin-sourcemap');
	grunt.initConfig({
		'jsmin-sourcemap': {
			dist: {
				src: ['./public/javascripts/lib/jquery-1.8.2.min.js',
				      './public/javascripts/lib/underscore.js',
				      './public/javascripts/lib/*',
	    		      './public/javascripts/models/*.js',
	    		      './public/javascripts/views/*.js',
	    		      './public/javascripts/*.js'],
				dest: './public/min.js',
				destMap: './public/min.js.map'
			}
		},
	    'mincss': {
	    	dist: {
	    		files: {
	    			'./public/min.css': './public/stylesheets/*.css'
	    		}
	    	}
	    }
	});
	grunt.registerTask('default', 'jsmin-sourcemap mincss');
};