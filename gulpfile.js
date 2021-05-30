const { src, dest } = require("gulp");
const minify = require("gulp-minify");

function minifyjs() {
  return src("src/adrest.js", { allowEmpty: true })
    .pipe(minify({ noSource: true }))
    .pipe(dest("dist"));
}

exports.default = minifyjs;
