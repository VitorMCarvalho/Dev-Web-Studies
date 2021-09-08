//padrão middleware (pattern) -- chain of responsability
//bloco composto por correntes de funções (passos ou middlewares) de baixo acoplamento

const passo1 = (contexto, next)=>{
    contexto.valor1 = "middleware1"
    next()
}

const passo2 = (contexto, next)=>{
    contexto.valor2 = 'middleware2'
    next()
}

const passo3 = (contexto)=>{
    contexto.valor3 = "middleware3"
}

const exec = (contexto, ...middlewares)=>{ //operador rest (...) coloca todos os parametrso passados no array chamado "middlewares"
    const execPasso = indice=>{
        middlewares && indice < middlewares.length && middlewares[indice](contexto, ()=>execPasso(indice+1))       
    }
    execPasso(0)
}

const contexto = {}
exec(contexto, passo1, passo2, passo3)

console.log(contexto)

