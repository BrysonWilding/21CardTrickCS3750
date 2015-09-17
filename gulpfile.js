var gulp = require('gulp');
var less = require('gulp-less');
var minifyCSS = require('gulp-minify-css');
var jade = require('gulp-jade');
var concatCss = require('gulp-concat-css');
var del = require('del');
var concat = require('gulp-concat');

gulp.task('default', ['less', 'jade', 'public', 'js']);

gulp.task('less', function () {
    return gulp.src('./less/*.less')
        .pipe(less())
        .pipe(minifyCSS())
        .pipe(concatCss("./prod/css/bundle.css"))
        .pipe(gulp.dest('./prod/css'));
});

gulp.task('jade', function(){
   return gulp.src('./*.jade')
       .pipe(jade())
       .pipe(gulp.dest('./prod/'))
});

gulp.task('public', function(){
    return gulp.src('./public/*')
        .pipe(gulp.dest('./prod/public/'))
});

gulp.task('js', function(){
    return gulp.src('./js/*.js')
        .pipe(concat('script.js'))
        .pipe(gulp.dest('./prod/js'));
});


// Cleaning directories
gulp.task('clean:css', function(res){
    del('./prod/css/*')
    return cache.clearAll(res);
});

gulp.task('clean:js', function(res){
    del('./prod/js/*')
    return cache.clearAll(res);
});

gulp.task('clean:html', function(res){
    del('./prod/*.html')
    return cache.clearAll(res);
});