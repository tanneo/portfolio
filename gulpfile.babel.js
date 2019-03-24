
import gulp from 'gulp'
import cssnano from 'gulp-cssnano' /* plugin in to ensure style sheet is as small as possible */
import sass from 'gulp-sass' /* makes it possible to convert SASS to CSS */


/**
 * SCSS Bundling
 * Bundles SCSS code to CSS
 * Exports the Bundled file into dist directory.
 */

function styles() {

  return gulp.src('./src/style.scss')
    .pipe(sass({
      outputStyle: 'uncompressed'
    }).on('error', function (error) {
      console.error(`${error.messageFormatted}`)
      this.emit('end')
    }))
    .pipe(cssnano())
    .pipe(gulp.dest('./dist/css'))

}

/**
 * Watch SCSS file or changes
 */
function watch() {
  gulp.watch('src/**/*.scss', gulp.series(styles))
}

/**
 * Export Tasks
 * Running `gulp watch` from the CLI will watch and bundle changes
 * Running `gulp styles` will bundle file
 *
 */
exports.watch = watch
exports.styles = styles
