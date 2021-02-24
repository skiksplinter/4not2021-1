//Parametros predefinidos ou opcionais em funcoes
//Regras:
//1 - Parametros opcionais devem vir apos os obrigatorios
//2 - Pode haver mais de um parametro opcional por funcao

//forma com oparametro predefinido ou opcional
function calcularArea(base, altura, forma = 'Q', casasDec = 2) {
    let res
    switch(forma){
        case 'Q': // Quadrilátero
            res = base * altura
            break
        case 'T': //Triangulo
            res = base * altura / 2
            break
        case 'E': //Elipse
            res = (base / 2) * (altura / 2) * Math.PI
    }
    return res.toFixed(casasDec)
}

console.log(calcularArea(20, 8, 'Q'))
console.log(calcularArea(7.5, 3, 'T'))
console.log(calcularArea(4.5, 4.5, 'E'))
console.log(calcularArea(30, 60))
//caso seja necessario omitir um parametro predefinido que nao
//seja o ultimo, pode se usar o valor undefined em seu lugar
console.log(calcularArea(30, 60, undefined, 3))