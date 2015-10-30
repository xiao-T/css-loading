var gulp = require('gulp'),
	plumber = require('gulp-plumber'),
	compass = require('gulp-compass'),
	autoprefixer = require('gulp-autoprefixer'),
	watch = require('gulp-watch'),
	dir = {
		'src': 'src',
		'dest': 'dest'
	}

gulp.task('watch', function(){
	return gulp.watch(dir.src + '/scss/*.scss', ['compass']);
})
/**
 * compass 
 * 编译 sass
 */
gulp.task('compass', function(){
	console.log('start compass')
	gulp.src(dir.src + '/scss/*.scss')
		.pipe(compass({
			sourcemap: true,
			css: dir.src + '/css',
			style: 'compact',
			sass: dir.src + '/scss'
		}))
});
gulp.task('autoprefixer', function(){
	gulp.src(dir.src + '/css/*.css')
		.pipe(autoprefixer({
			browsers: ['last 2 versions', 'IE 9']
		}))
		.pipe(gulp.dest(dir.src + '/css'))
})
