let nome = "Joao"
let idade = 26

//Mensagem usando concatenaçao
console.log('Meu nome é ' + nome + ' e minha idade é ' + idade + ' ')

//Mensagem usando Template Literal
console.log(`Meu nome é ${nome} e minha idade é ${idade}.`)
console.log(`Meu nome é ${nome.toUpperCase()} e minha idade é ${idade}.`)
console.log(`7 vezes 6 é igual ${7 * 6}.`)

//Tentando usar template literals com outro tipo de aspas
console.log("Meu nome é ${nome} e minha idade é ${idade}.`")