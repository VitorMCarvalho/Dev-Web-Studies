/*Criar uma função que receba um array de números e retorne o menor número desse array.*/

const menor = array =>{
    let result = array[0]
    for(let i = 1; i< array.length; i++){
        if(result > array[i])
            result = array[i]
    }
    console.log(result)
}
menor([10, 5, 35, 65]) // retornará 5
menor([5, -15, 50, 3]) // retornará -15