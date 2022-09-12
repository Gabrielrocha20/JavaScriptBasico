const input = require('readline-sync')
const numero = Number(input.question('Digite um numero que lhe informarei a tabuada dele: '))

let contador = 0

while (contador <= 10 ){
    console.log(`${numero} X ${contador} = ${numero * contador}`)
    contador ++
}