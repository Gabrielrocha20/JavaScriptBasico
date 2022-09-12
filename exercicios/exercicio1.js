const input = require('readline-sync')
const temperatura = Number(input.question('Informe a temperatura em Fahrenheit: '))

function transformarTemperaturaEmCelsius (temperatura) {
    return (5 * (temperatura - 32) ) / 9
}

console.log(transformarTemperaturaEmCelsius(temperatura))