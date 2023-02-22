const gulp = require("gulp");
const cleanCSS = require("gulp-clean-css");
const inline = require("gulp-inline");
const uglify = require("gulp-uglify");

function defaultTask(cb) {
  gulp
    .src("./src/html.tpl")
    .pipe(
      inline({
        base: "./src",
        js: uglify,
        css: function () {
          return cleanCSS();
        },
      })
    )
    .pipe(gulp.dest("./dist"));
  cb();
}
exports.default = defaultTask;
