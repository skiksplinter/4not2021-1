let nota = 7.2
/*let situacao

if(nota >= 6) {
    situacao = 'APROVADO'
}
else {
    situacao = 'REPROVADO'
}*/


/*
if (nota >= 6) situacao = 'APROVADO' 
else situacao = 'REPROVADO' */

//As tres partes do operador ternario
//1- parte; condicao (que iria depois do if)
//2- parte; o resultado, caso a condicao seja VERDADEIRA
//Entre a 2 e a 3 partes -> :
//3 - parte: o resultado, caso a condicao seja FALSA


situacao = nota >= 6 ? 'APROVADO' : 'REPROVADO'
console.log(situacao)

let user= 'admin'
let userType

userType = user === 'admin' || user === 'root' ? 'Superuser' : 'Ordinary user'
console.log(userType)
