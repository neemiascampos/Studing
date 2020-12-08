// testando funcionalidades
console.log(typeof Array)
console.log(typeof new Array)
console.log(typeof [])

let aprovados = new Array('Bia', 'Carlos', 'Ana')
console.log(aprovados)

aprovados = ['Bia', 'Carlos', 'Ana']
console.log(aprovados[0])
console.log(aprovados[1])
console.log(aprovados[2])
console.log(aprovados[3])

aprovados[3] = 'Paulo'
aprovados.push('Abia')
console.log(aprovados.length)

aprovados[9] = 'rafael'
console.log(aprovados.length)

console.log(aprovados)
aprovados.sort()
console.log(aprovados)

delete aprovados[1]
console.log(aprovados[1])

aprovados = ['Bia', 'Ana', 'Carlos']
aprovados.splice(1, 2, 'Elemento1', 'Elemento2')
console.log(aprovados)



