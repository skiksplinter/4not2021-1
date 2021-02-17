// ES6 => ECMAScript versao 6, de 2016

// Toda vez que arquivo tem export (sem default) a importacao
// precisa acontecer entre chaves (desestruturacao)

import {numeros} from './includes/dados.mjs'
//podemos importar só o que vamos efetivamente usar, caso o arquivo de
//origem exporte mais de um item

//import { somaVet, quadradoVet } './includes/funcoes.mjs'
import {somaVet, quadradoVet} from './includes/funcoes.mjs'

//Quando existe export default no arquivo de origem, a importacao
//nao tem chaves
import dobraVet from './includes/funcoes2.mjs'

//usando os itens importados

console.log(somaVet(numeros))
//console.log(quadradoVet(numeros))
console.log(dobraVet(numeros))
console.log(quadradoVet(numeros))