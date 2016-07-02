var gulp = require('gulp');
var sass = require('gulp-sass');
var watch = require('gulp-watch');
var browser_sync = require('browser-sync');
var browserify = require('browserify');
var uglify = require('gulp-uglify');
var imagemin = require('gulp-imagemin');
var source = require('vinyl-source-stream');
var buffer = require('vinyl-buffer');
var cssnano = require('gulp-cssnano');
var sourcemaps = require('gulp-sourcemaps');
var del = require('del');
var reload = browser_sync.reload;

gulp.task('images', function() {
	return gulp.src('app/images/*')
		.pipe(imagemin())
		.pipe(gulp.dest('app/dist/images'));
});

gulp.task('clean:dist', ['clean:js','clean:css','clean:images'], function() {});

gulp.task('clean:js', function() {
	return del(['app/dist/js/**/*']);
})

gulp.task('clean:css', function() {
	return del(['app/css/**/*', 'app/dist/css/**/*']);
})

gulp.task('clean:images', function() {
	return del(['app/dist/images/**/*']);
})

gulp.task('browserify', function() {
	return browserify('./app/js/index.js')
		.bundle()
		.pipe(source('bundle.js'))
		.pipe(buffer())
		.pipe(uglify())
		.pipe(gulp.dest('app/dist/js'));
});

gulp.task('sass', function() {
  return gulp.src('./app/scss/*.scss')
  	.pipe(sass().on('error', sass.logError))
    .pipe(gulp.dest('app/css'))
    .pipe(sourcemaps.init())
    .pipe(cssnano())
    .pipe(sourcemaps.write('.'))
    .pipe(gulp.dest('./app/dist/css'))
    .pipe(reload({ stream:true }));
});

gulp.task('serve', ['clean:dist', 'sass','browserify','images'], function() {
  browser_sync({
    server: {
      baseDir: 'app'
    }
  });

  gulp.watch('app/scss/*.scss', ['sass']);
  gulp.watch('app/js/index.js', ['browserify']);
  gulp.watch('app/images/*', ['images']);
});
