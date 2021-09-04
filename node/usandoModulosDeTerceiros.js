const _ = require('lodash')
setInterval(() => console.log(_.random(1,1000)),1000)
// entrando nesse diretorio e usando o nodemon, a aplicação continua executando em tempo real
//para instalar o nodemon => sudo npm i -g nodemon