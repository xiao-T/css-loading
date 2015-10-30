var gulp = require('gulp'),
	plumber = require('gulp-plumber'),
	compass = require('gulp-compass'),
	watch = require('gulp-watch'),
	dir = {
		'src': 'src',
		'dest': 'dest'
	}

gulp.task('watch', function(){
	return gulp.watch(dir.src + '/scss/*.scss', ['compass']);
})
gulp.task('compass', function(){
	console.log('start compass')
	gulp.src(dir.src + '/scss/*.scss')
		.pipe(compass({
			css: dir.src + '/css',
			style: 'compact',
			sass: dir.src + '/scss'
		}))
		// .pipe(gulp.dest(dir.src + '/css'));
		
});
