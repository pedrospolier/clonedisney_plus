const gulp = require('gulp');
const sass = require('gulp-sass')(require('sass'));
const cleanCSS = require('gulp-clean-css');

// Função que compila e minifica
function styles() {
  return gulp.src('./src/styles/**/*.scss')  // sua pasta de SCSS
    .pipe(sass().on('error', sass.logError)) // compila Sass
    .pipe(cleanCSS({ level: 2 }))            // minifica CSS
    .pipe(gulp.dest('./dist/css'));          // saída
}

// Exporta a task explicitamente como "styles"
exports.styles = styles;   // agora "gulp styles" funciona
exports.default = styles;  // "gulp" funciona também
exports.watch = function () {
    gulp.watch('./src/styles/**/*.scss',gulp.parallel(styles));
}
