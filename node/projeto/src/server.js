//simulação realizada utilizando o Postman

const porta = 3003 //porta unica por processo de comunicação com rede
const express = require("express")
const app = express()
//const bodyParser = require('body-parser') //apenas para express 4.16.0 ou inferior
const DB = require('./bancodeDados')

app.use(express.json());
app.use(express.urlencoded({extended: true}));

/*app.get("/produtos", (req, res, next)=>{
    console.log("middleware 1")
    next()
})*/

app.get('/produtos', (request, response, next)=>{ // Retorna o objeto em format json //forma de requisição 
    //padrao middleware ^           ^       ^
    response.send(DB.getProdutos())// send ->transforma em um JSON
    //console.log('middleware 2')
})

app.get('/produtos/:id', (req, res, next)=>{ //id é passado numérico pelo navegador // retorna 1 valor
    //              ^------------------,
    res.send(DB.getProduto(req.params.id))
})

app.post('/produtos', (req,res,next)=>{ //adiciona
    const prod = DB.salvarProduto({ //requisição de formulario geralmente é do tipo post
        nome: req.body.nome,
        preco :req.body.preco
    })
    res.send(prod) //JSON
})

app.put('/produtos/:id', (req,res,next)=>{ //altera
    const prod = DB.salvarProduto({ //requisição de formulario geralmente é do tipo post
        id: req.params.id,
        nome: req.body.nome,
        preco :req.body.preco
    })
    res.send(prod) //JSON
})

app.delete('/produtos/:id', (req,res,next)=>{ //deleta
    res.send(DB.excluirProduto(req.params.id)) //json
})


app.listen(porta, ()=>{
    console.log(`servidor está executando na porta ${porta}`)
})