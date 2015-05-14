'use strict';

var gulp = require('gulp'),
    uglify = require('gulp-uglify'),
    watch = require('gulp-watch');

var paths = {
    scripts: ['src/js/*.js'],
    
}

gulp.task('minify', function () {
    gulp.src('js/app.js')
        .pipe(uglify())
        .pipe(gulp.dest('build'))
});