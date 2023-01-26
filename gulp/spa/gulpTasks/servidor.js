const gulp = require('gulp')
const webserver = require('gulp-webserver')
const watch = require('gulp-watch')

const monitorarArquivos = (cb) =>{
     watch('src/**/*.html', () => gulp.series('appHtml')())
     watch('src/**/*.scss', () => gulp.series('appCSS')())
     watch('src/**/*.js', () => gulp.series('appJS')())
     watch('src/assets/imgs/**/*.*', () => gulp.series('appIMG')())
    return cb
}

const servidor = (cb) =>{
    return gulp.src('build')
        .pipe(webserver({
            port:8080,
            open: true,
            livereload:true
        }))
}

module.exports = {
    monitorarArquivos,
    servidor
}