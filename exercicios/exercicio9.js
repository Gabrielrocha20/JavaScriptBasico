const input = require('readline-sync')

const dicionarioDePerguntas = {
    '1': 'Mora perto da vitima? ',
    '2': 'Já trabalhou com a vitima? ',
    '3': 'Telefonou para a vitima? ',
    '4': 'Esteve no local do crime? ',
    '5': 'Devia para a vitima? ',
}
const dicionarioDeNivelDeSuspeita= {
    '1': 'Liberado',
    '2': 'Suspeito',
    '3': 'Cumplice',
    '4': 'Cumplice',
    '5': 'Assassino',
}

let somadordeSuspeita = 0
let contador = 1

while (contador <= 5) {
    const resposta = input.question(dicionarioDePerguntas[`${contador}`])
    
    if (resposta == 'sim') {
        somadordeSuspeita ++
    }
    contador ++
}
console.log(dicionarioDeNivelDeSuspeita[`${somadordeSuspeita}`])
