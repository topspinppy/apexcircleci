var gulp = require('gulp');
var sass = require('gulp-sass');

gulp.task('build-sass', () => {
  return gulp.src('./styles/scss/main.scss')
    .pipe(sass().on('error', sass.logError))
    .pipe(gulp.dest('./styles/css'));
});
