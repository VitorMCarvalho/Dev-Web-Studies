// operador ... rest(juntar)/spread(espalhar)
//rest usado como parametro de functions para criar listas de valores

//spread usado com objetos
const funcionario = {nome: 'joe', salario: 1258152}
const clone = {ativo:true, ...funcionario}
console.log(clone)

//spread com array
const grupoA = ["jony", 'sus', 'seven']
const grupoFim  = ["jim", "luz", ...grupoA, "final" ]
console.log(grupoFim)