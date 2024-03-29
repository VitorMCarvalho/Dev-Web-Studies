const { series, parallel } = require('gulp')
const gulp = require('gulp')

const {appCSS, appHtml, appIMG, appJS } = require("./gulpTasks/app")
const {depsCSS, depsFonts} = require("./gulpTasks/deps")
const {monitorarArquivos, servidor} = require("./gulpTasks/servidor")

module.exports.default = series(
    parallel(
        series(appHtml,appCSS,appJS,appIMG),
        series(depsCSS,depsFonts)
    ),
    servidor,
    monitorarArquivos
)