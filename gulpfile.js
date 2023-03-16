const gulp = require("gulp");
const cleanCSS = require("gulp-clean-css");
const inline = require("gulp-inline");
const uglify = require("gulp-uglify");
const htmlSplit = require('gulp-htmlsplit');

function makeInline() {
	return gulp
		.src("./src/index.html")
		.pipe(
			inline({
				base: "./src",
				js: uglify,
				css: function () {
					return cleanCSS();
				},
			})
		);
}

gulp.task('default', function () {
	return makeInline()
		.pipe(htmlSplit())
		.pipe(gulp.dest("./dist"));
})


gulp.task('single', function () {
	return makeInline()
		.pipe(gulp.dest("./dist"));
})