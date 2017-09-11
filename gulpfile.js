
var gulp 		= require('gulp'),
	browserSync = require('browser-sync').create(),
	watch 		= require('gulp-watch'),
	sass		= require('gulp-sass'),
	plumber		= require('gulp-plumber'),
	sourcemaps	= require('gulp-sourcemaps'),
	autoprefixer = require('gulp-autoprefixer');


gulp.task('sass', function() {

    return gulp.src('./sass/styles.scss')
        .pipe(sourcemaps.init())
        .pipe(sass.sync())
        .pipe(autoprefixer({
            browsers:["last 5 versions", "IE 9"]
        }))
        .pipe(sourcemaps.write('./'))
        .pipe(gulp.dest('./css/'))
        .pipe(browserSync.stream());

})


gulp.task('watch', function () {
    gulp.watch('./sass/**/*.scss', ['sass']);
    gulp.watch('./scripts/**/*.js', browserSync.reload);
    gulp.watch('*.html', browserSync.reload);
});

gulp.task('browserSync', function () {
	browserSync.init({
		server: {
			baseDir: "./"
		}
	});
});

gulp.task('default', ['sass', 'browserSync', 'watch']);
