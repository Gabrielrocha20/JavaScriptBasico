const input = require('readline-sync')
const arr = ['pedra', 'papel', 'tesoura']

function jogadaPapel (maquina){
    if (maquina == 'papel') {
        console.log('Empate')
    } else if (maquina == 'tesoura', maquina){
        console.log('Vitoria da maquina', maquina)
    } else if (maquina == 'pedra') {
        console.log('Vitoria do player', maquina)
    }
}
function jogadaPedra (maquina){
    if (maquina == 'pedra') {
        console.log('Empate', maquina)
    } else if (maquina == 'papel', maquina){
        console.log('Vitoria da maquina', maquina)
    } else if (maquina == 'tesoura'){
        console.log('Vitoria do player', maquina)
    }
}
function jogadaTesoura (maquina){
    if (maquina == 'tesoura') {
        console.log('Empate', maquina)
    } else if (maquina == 'pedra'){
        console.log('Vitoria da maquina', maquina)
    } else if (maquina == 'papel'){
        console.log('Vitoria do player', maquina)
    }
}


while (true) {
    const entrada = input.question('Informe a Entrada:(pedra[1], papel[2] ou tesoura[3])')
    let random = Math.floor(Math.random() * 3)

    const entradas = {
        '1': jogadaPedra,
        '2': jogadaPapel,
        '3': jogadaTesoura,
    }
    entradas[entrada](arr[random])
}
