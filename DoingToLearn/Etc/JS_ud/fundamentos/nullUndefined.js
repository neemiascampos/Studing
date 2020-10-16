let valor // nao inicializada
console.log(valor)

valor = null
console.log(valor) //ausência de valor

const produto = {}
    console.log(produto.preco)
    console.log(produto)

    produto.preco =3.5
    console.log(produto)

    produto.preco = undefined //evitar  
    //produto.preco = null // preco fica nulo
    console.log(!!produto.preco) 
    //delete produto.preco <- recomendável
    console.log(produto)
