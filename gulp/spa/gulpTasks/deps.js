const gulp = require("gulp")
const ugly = require("gulp-uglifycss")
const concat = require("gulp-concat")

const depsCSS = () =>{
    return gulp.src("/home/vitor/Área de Trabalho/Dev-Web-Studies/gulp/spa/node_modules/font-awesome/css/font-awesome.css")
        .pipe(ugly({"uglyComments":false}))
        .pipe(concat("deps.min.css"))
        .pipe(gulp.dest(("build/assets/css")))
}

const depsFonts = () =>{
    return gulp.src("/home/vitor/Área de Trabalho/Dev-Web-Studies/gulp/spa/node_modules/font-awesome/fonts/*.*")
        .pipe(gulp.dest("build/assets/fonts"))
}

module.exports = {
    depsCSS,
    depsFonts
}