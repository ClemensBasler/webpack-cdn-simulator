
var gulp = require('gulp');
var webpack = require('webpack-stream');

var myPipes = {};

myPipes.webpack = function() {
  gulp.src('./src/app.js')
  webpack( require('./webpack.config.js') )
  .pipe(gulp.dest('dist/'));
}

myPipes.copyFiles = function() {
  gulp.src('./src/index.html')
  .pipe(gulp.dest('./dist/'));
  gulp.src('./src/style.css')
  .pipe(gulp.dest('./dist/'));
};

myPipes.build = function () {
  myPipes.webpack();
  myPipes.copyFiles();
}

gulp.task('build', myPipes.build);
