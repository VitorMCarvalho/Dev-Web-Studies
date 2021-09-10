let a = 1
console.log(a)

let b = new Promise((resolve,reject)=>{
    resolve(['joe', 'arial', 'bin']) //aceita um unico parametro, para mais de um valor, passe um objeto ou um array
})

b.then(x => x[0]) //joe
 .then(a => a[0]) // j
 .then(x=>console.log(x)) //printar j
//console.log(typeof b) //object
//console.log(typeof Promise) //function