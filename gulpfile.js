const gulp = require('gulp');
const sass = require('gulp-sass')(require('sass'));
const sourcemaps = require('gulp-sourcemaps');
const uglify = require('gulp-uglify');
const obfuscate = require('gulp-obfuscate');
const imagemin = require('gulp-imagemin');

function comprimeImagens() {
    return gulp.src('./compiled/images/*')
        .pipe(imagemin())
        .pipe(gulp.dest('./minified/images'));
}

function comprimeJavaScript() {
    return gulp.src('./compiled/scripts/*.js')
        .pipe(uglify())
        .pipe(obfuscate())
        .pipe(gulp.dest('./minified/scripts'))
}

function compilaSass() {
    return gulp.src('./compiled/styles/main.scss')
        .pipe(sourcemaps.init())
        .pipe(sass({
            outputStyle: 'compressed'
        }))
        .pipe(sourcemaps.write('./maps'))
        .pipe(gulp.dest('./minified/styles'));
}

exports.default = function() {
    gulp.watch('./compiled/styles/*.scss', { ignoreInitial: false }, gulp.series(compilaSass));
    gulp.watch('./compiled/scripts/*.js', { ignoreInitial: false }, gulp.series(comprimeJavaScript));
    gulp.watch('./compiled/images/*', { ignoreInitial: false }, gulp.series(comprimeImagens));
}
