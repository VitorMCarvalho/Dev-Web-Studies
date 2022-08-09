const express = require('express')
const bodyParser = require('body-parser')
const multer = require('multer')

const app = express()

app.use(express.static('.')) //servir todos os arquivos estaticos
app.use(bodyParser.urlencoded({extended:true})) // transformar outros tipos (e.g. submit de formulario) e transformar em objeto
app.use(bodyParser.json()) // tranformar json em objeto

//configuracao do multer - destino para a pasta upload - nome do arquivo
const storage = multer.diskStorage({
    destination: function(req, file, callback){
        callback(null, './upload')
    },
    filename: function(req, file, callback){
        callback(null, `${Date.now()}_${file.originalname}`)
    }
})
//passando a config
const upload = multer({storage}).single('arquivo')

app.post('/upload', (req, res)=>{
    upload(req, res, err =>{
        if(err)
            return res.end("ocorreu um erro.")
        res.end('concluido com sucesso')
    })
})

app.post('/formulario', (req, res)=>{
    res.send({
        ...req.body,
        id: 1
    })
})

app.get('/parOuImpar', (req, res) => {
    // req.body
    // req.query
    // req.params
    const par = parseInt(req.query.numero) % 2 === 0
    res.send({
        resultado: par ? 'par' : 'impar'
    })
})

app.get('/teste', (req, res) => res.send("OK")) //funcao middleware que eh invocada apenas quando recebe um get/teste
app.listen(8080, ()=> console.log("executando..."))