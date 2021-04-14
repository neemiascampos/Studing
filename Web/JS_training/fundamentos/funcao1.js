//sem retorno
function imprimirSoma(a,b){
    console.log(a+b)
}

imprimirSoma(2,3)
imprimirSoma(2)
imprimirSoma(2,3,7,8,6) //ignorar o resto


//com retorno
function soma(a,b=0){ //nao tendo b => b=0
    return a+b
}

console.log(soma(2,3))
console.log(soma(2))