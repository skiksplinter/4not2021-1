

//Caracteristicas desta funcao:
//1 - Tem apenas 1 argumento
//2 - Seu corpo tem apenas uma linha de códig0o, com return

function quadrado(n){
    return n * n
}

// Reescrevvendo a funcao anterior como arrow function
//1 - os paranteses em torno do argumento sao omitidos
//2 -a palavra funcion, antes do argumento, é substituida pelo simbolo =>
//APOS o argumento
//3 - as chaves sao omitidas
//4 - a palavra return é omitida
const quadrado2 = n => n*n

console.log(quadrado(144), quadrado2(144))


//funcao com mais de 1 argumento
function potencia(b,e) { //b = base, e = expoente
    return b ** e
}

//com 1+ argumentos, os parenteses em volta deles retorna
let potencia2 =(b , e) => b ** e

console.log(potencia(4,5), potencia2(4,5))

//funcao sem argumentos
function megasena(){
    //Retorna um numero aleatorio entre 1 e 60
    //Math.random() -> retorna um numero aleatorio entre 0 e 1
    //Multiplicando por 60 -> temos um numero entre 0 e 59 (fracionario)
    //Soma 1 -> ajusta a faixa para entre 1 e 60
    //floor() -> retirar as casas decimais
    return Math.floor(Math.random() * 60 + 1)
}
console.log(megasena(), megasena(), megasena()) 

const megasena2 = () => Math.floor(Math.random() * 60 + 1)
console.log(megasena2(), megasena2(), megasena2())

//Funcao com mais de uma linha de codigo no corpo
function somaTudo(...nums) {
    let soma = 0
    for(let n of nums) soma += n
    return soma
}

//Arrow function para corpos com mais de uma linha
//Voltam as chaves
//Os parenteses em torno do argumento sao necessarios por se tratar
//de um argumento de resto)
let somaTudo2 = (...nums) => {
    let soma = 0
    for(let n of nums) soma += n
    return soma
}