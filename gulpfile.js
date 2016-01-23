"use strict";

var gulp = require('gulp');
var sourcemaps = require('gulp-sourcemaps');
var sass = require('gulp-sass');

gulp.task('styles', function() {
    gulp.src('stylesheets/**/*.scss')
    	.pipe(sourcemaps.init())
        	.pipe(sass().on('error', sass.logError))
        .pipe(sourcemaps.write())
        .pipe(gulp.dest('css/'));
});

//Watch task
gulp.task('watch', function() {
    gulp.watch('stylesheets/**/*.scss', ['styles']);
});