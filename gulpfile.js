const gulp = require('gulp');
const sass = require('gulp-sass')(require('sass'));

// Task de estilos
function styles() {
  return gulp.src('./src/styles/main.scss') // arquivo principal
    .pipe(sass({ 
      outputStyle: 'compressed',
      includePaths: ['./src/styles']
    }).on('error', sass.logError))
    .pipe(gulp.dest('./dist/css'));
}


// Watch
function watchFiles() {
  gulp.watch('./src/styles/**/*.scss', styles); // observa tudo em styles
}

// Exporta tasks
exports.styles = styles;
exports.watch = watchFiles;
exports.default = gulp.series(styles, watchFiles);
