const gulp = require("gulp");
const sass = require('gulp-sass')(require('node-sass'));
const cleancss = require('gulp-clean-css');
const csscomb = require('gulp-csscomb');
const rename = require('gulp-rename');
const autoprefixer = require('gulp-autoprefixer');

function css() {
  return gulp
    .src('./src/*.scss')
    .pipe(sass({outputStyle: 'compact', precision: 2})
      .on('error', sass.logError)
    )
    .pipe(autoprefixer())
    .pipe(csscomb())
    .pipe(gulp.dest('./'))
    .pipe(cleancss())
    .pipe(rename({
      suffix: '.min'
    }))
    .pipe(gulp.dest('./'));
}

function watch() {
  gulp.watch('./**/*.scss', css);
}

const build = gulp.series(css);

exports.default = build;
exports.watch = watch;
exports.css = css;