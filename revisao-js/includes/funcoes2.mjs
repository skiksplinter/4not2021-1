//Neste arquivo, ha apenas um item sendo exportado, e é uma function
//Podemos usar  export default

export default function dobravet(vet) {
    //cria um novo vetor com elementos que sao o
    //dobro do valor do vetos original
    let res=[]
    for(let n of vet) res.push(n * 2)
    return res
}