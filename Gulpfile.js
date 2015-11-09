var gulp = require('gulp'),
	exec = require('child_process').exec,
	cmd = 'gulp watch',
	plumber = require('gulp-plumber'),
	compass = require('gulp-compass'),
	autoprefixer = require('gulp-autoprefixer'),
	watch = require('gulp-watch'),
	dir = {
		'src': 'src',
		'dest': 'dest'
	}

gulp.task('watch', function(){
	var scssWatcher = gulp.watch(dir.src + '/scss/{,*/}*.scss', ['compass']);
	var cssWatcher = gulp.watch(dir.src + '/css/*.css', ['autoprefixer'])
    /*cssWatcher.on('change', function(event) {
    	console.log(exec);
		console.log('File ' + event.path + ' was ' + event.type + ', running tasks...');
	});*/
    return cssWatcher;
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
		.on('error', function(event){
			console.log('compass error');
			// exec(cmd);
		})
});
gulp.task('autoprefixer', function(){
	gulp.src(dir.src + '/css/*.css')
		.pipe(autoprefixer({
			browsers: ['> 1%', 'last 2 versions']
		}))
		.pipe(gulp.dest(dir.src + '/css'))
})
