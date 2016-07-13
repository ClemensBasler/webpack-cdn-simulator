var gulp = require('gulp');
var webpack = require('webpack-stream');

var myPipes = {};

myPipes.webpack = function() {
  gulp.src('./src/tsStuff.ts')
  webpack( require('./webpack.config.js') )
  .pipe(gulp.dest('dist/'));
}

myPipes.copyFiles = function() {
  gulp.src('./src/index.html')
  .pipe(gulp.dest('./dist/'));
};

myPipes.build = function () {
  myPipes.webpack();
  myPipes.copyFiles();
}

gulp.task('build', myPipes.build);
