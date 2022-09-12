const input = require('readline-sync')


const x_1 = Number(input.question('Informe as cordenadas x1: '))
const y_1 = Number(input.question('Informe as cordenadas y1: '))

const x_2 = Number(input.question('Informe as cordenadas x2: '))
const y_2 = Number(input.question('Informe as cordenadas y2: '))

function calcularDistanciaEuclidiana (x1, y1, x2, y2) {
    return Math.sqrt((x2 - x1) ** 2 + (y2 - y1) ** 2)
}

console.log(calcularDistanciaEuclidiana(x_1, y_1, x_2, y_2))