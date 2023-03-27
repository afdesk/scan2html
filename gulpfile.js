const gulp = require("gulp");
const cleanCSS = require("gulp-clean-css");
const inline = require("gulp-inline");
const uglify = require("gulp-uglify");
const htmlSplit = require("gulp-htmlsplit");
const argv = require('yargs').argv;

function makeInline() {
	return gulp.src("./src/index.html").pipe(
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
	let dist;
	if (argv.dist) {
		dist = argv.dist;
	} else {
		dist = './dist'
	}
	return makeInline()
		.pipe(htmlSplit())
		.pipe(gulp.dest(dist));
})
gulp.task("default", function () {
	return makeInline().pipe(htmlSplit()).pipe(gulp.dest("./dist"));
});

gulp.task("dev", function () {
	return gulp
		.src("./src/index.html")
		.pipe(htmlSplit())
		.pipe(gulp.dest("./dist"));
});

gulp.task("single", function () {
	return makeInline().pipe(gulp.dest("./dist"));
});

gulp.task('single', function () {
	return makeInline()
		.pipe(gulp.dest("./dist"));
})