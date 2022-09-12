const input = require('readline-sync')
const numero = Number(input.question('Digite um numero que lhe informarei a area desse circulo: '))

function areaDoCirculo (raio) {
    return Math.PI * raio ** 2
}

console.log(areaDoCirculo(numero))