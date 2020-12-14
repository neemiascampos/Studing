function tratarErroELancar(erro) {
    //throw new Error('...')
    //throw 10
    //throw true
    //throw "msg"
    throw {
        nome: erro.nome,
        msg: erro.message,
        date: new Date
    }
}

function imprimirNomeGritando(obj) {
    try {
        console.log('É, deu certo ' + obj.nome.toUpperCase() + '!!!')
    } catch (e) {
        console.log('É, deu errado, amigo')
        tratarErroELancar(e)

    } finally {
        console.log('fim\n')
    }
}

const obj1 = {nome: 'Neemias'} //sem erro
const obj2 = {name: 'Campos'} //Com erro 'name'

imprimirNomeGritando(obj1)
imprimirNomeGritando(obj2)