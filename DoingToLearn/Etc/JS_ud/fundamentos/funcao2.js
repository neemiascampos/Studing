//armazenando funcao em uma variavel
const imprimirSoma = function(a,b){
    console.log(a+b)
}
imprimirSoma(2, 3)

//armazenando uma funcao arrow em uma variavel
const soma = (a,b) => {
    return a+b
}
console.log(soma(2, 3))

//retorno impicito
const subtracao = (a,b) => a-b
console.log(subtracao(2,3))

const d = a => a-4*a*3
console.log(d(4))
