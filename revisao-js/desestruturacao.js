let vetor = [10, 20, 30]

let obj = {
    nome: 'Maria',
    idade: 24,
    naturalidade: 'Pedregulho/SP'
}

//desestruturaçao de vetor: as variaveis do let podem ter qualquer nome
let [x, y, z] = vetor
console.log(x)
console.log(y)
console.log(z)

//desestruturaçao de objetos: as variaveis do let DEVEM ter os mesmos nome
//das propriedades, nao importa a ordem
let {naturalidade, nome, idade} = obj
console.log(nome)
console.log(idade)
console.log(naturalidade)

let obj2 ={
    marca: 'Volks',
    modelo: 'Fusca',
    ano: 1969,
    cor:'Preto'
}

//desestrututacao parcial de um objeto
let{modelo, ano} = obj2
console.log(modelo)
console.log(ano)

let vet2 = ['laranja' , 'maça' , 'pera']

//Nao da certo: desestruturacao parcial de vetor
//let[undefined, fruta2, undefined] = vet2
//console.log(fruta2)

//ignorando o ultimo elemento
let [fruta1, fruta2] = vet2
console.log(fruta1)
console.log(fruta2)

//ignorando o primeiro elemento (deixe uma virgula na posicao a ignorar)
let [, f2, f3] = vet2
console.log(f2)
console.log(f3)
