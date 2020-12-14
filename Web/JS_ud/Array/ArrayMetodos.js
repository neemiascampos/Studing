const pilotos = ['Vettel', 'Alonso', 'Raikkonen', 'Massa']
pilotos.pop() //masssa saiu
console.log(pilotos)

pilotos.push('Verstappen')
console.log(pilotos)

pilotos.shift() // remove primeiro
console.log(pilotos)

pilotos.unshift('Hamilton')
console.log(pilotos) //adiciona primeiro

const algunsPilotos1 = pilotos.slice(2) // novo array
console.log(algunsPilotos1)
