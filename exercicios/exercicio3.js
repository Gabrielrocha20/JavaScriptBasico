const input = require('readline-sync')

const entrada = parseFloat(input.question('Informe a Entrada: '))



function informarSaida(entrada) {
    const dicionarioDeEntradas = {
        '1': [0, 25],
        '2': [25.1, 50],
        '3': [50.1, 75],
        '4': [75.1, 100],
    }
    for (let i = 1; i <= 4; i++){
        let x = dicionarioDeEntradas[String(i)][0]
        let y = dicionarioDeEntradas[String(i)][1]
        if (x <= entrada && entrada <= y){
            console.log(`Entrada: ${entrada} | Saida: (${x}, ${y})`)
            return
        }
    }
    
    console.log(`Entrada: ${entrada} | Saida: Fora de intervalo`)

}

informarSaida(entrada)