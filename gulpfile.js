var gulp = require('gulp'),
	nodemon = require('gulp-nodemon');

gulp.task('dev', function() {
	var stream = nodemon({
		script: 'build/server.js',
		ext: 'js',
	});
	stream
		.on('restart', function() {
			console.log('restarted!')
		})
		.on('crash', function() {
			console.error('Application has crashed!\n');
			stream.emit('restart', 5); //After 5 minutes, restart
		})
})
