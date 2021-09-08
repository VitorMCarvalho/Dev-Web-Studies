const schedule = require('node-schedule')

const tarefa1 = schedule.scheduleJob('*/5 * 17 * * 3', function(){
    console.log("executando a 1º tarefa", new Date().getSeconds())
}) // ('de 5 em 5 segundos(sem a */ ele executa apenas no segundo '5' de qualquer minuto da hora delimitada)| minuto| hora| dia| mes| dia da semana (3=quarta-feira)')

setTimeout(function(){
    tarefa1.cancel()
    console.log("cancelado tarefa 1")
},20000)

const regra = new schedule.RecurrenceRule()
regra.dayOfWeek = [new schedule.Range(1,5)]
regra.hour = 17
regra.second = 30

const tarefa2 = schedule.scheduleJob(regra, function(){
    console.log("executando tarefa 2", new Date().getSeconds())
})