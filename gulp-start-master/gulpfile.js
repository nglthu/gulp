var gulp=require('gulp');
var	uglify=require('gulp-uglify');
var rename=require('gulp-rename');
var minifyCSS=require('gulp-minify-css');
gulp.task('scripts', function(){
	gulp.src('_js/*.js')
		.pipe(rename('app.min.js'))
	 	.pipe(gulp.dest('js/'));
});

gulp.task('styles', function(){
	gulp.src("css/*.css").pipe(minifyCSS())
	.pipe(gulp.dest('minCSS'));
});


		  
gulp.task('hello',function(){
	
	console.log('hello');
});

gulp.task('robot', function(){
	
	console.log("robot");
});


   
gulp.task('default', ['scripts', 'styles', 'hello', 'robot']);