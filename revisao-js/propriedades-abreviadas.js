//criando um objeto cujo valor das propriedades vem 
// de variaveis

let usuario = 'joao'
let senha = 'Deus123'
let name = 'Joao das Couves'
let lastLogin = '2021-02-08 22:50:28'

let userInfo = {
    login: usuario,
    password: senha,
    name, //Propriedade abreviada (name: name)
    lastLogin // (lastLogin: lastLogin)
}

console.log(userInfo)

let info = 'Isto é um teste'
console.log(info)
console.log({info})