import gulp from 'gulp'
import cssnano from 'gulp-cssnano'
import sass from 'gulp-sass'

/**
 * SCSS Bundling
 * Bundles SCSS code to CSS
 * Exports the Bundled file into diest directory.
 */

function styles() {

  return gulp.src('./src/style.scss')
    .pipe(sass({
      outputStyle: 'uncompressed'
    }).on('error', function (error) {
      console.error(`${error.messageFormatted}`)
      this.emit('end')
    }))
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
