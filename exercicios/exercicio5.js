const input = require('readline-sync')
let contador = 1

let somador = 0
while (contador != 0){
    let numero = Number(input.question('Digite um numero para fazer a soma: '))
    if (numero == 0) {
        contador = 0
    }
    somador += numero
}
console.log('A soma desses numeros e igual a ', somador)