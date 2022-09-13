const input = require('readline-sync')

class JogoDaForca {
    constructor () {
        this.meuArray = ['banana', 'pizza', 'lasanha', 'futebol']
        this.indiceAleatorio = Math.floor(Math.random() * this.meuArray.length)
        this.palavraSecreta = this.meuArray[this.indiceAleatorio]
    }

    criarForca (){
        let arraySecreto = this.palavraSecreta.split('')
        for (let i in arraySecreto) {
            arraySecreto[i] = '-'
        }
        return arraySecreto
    }

    get jogar () {
        let arraySecretoPronto = this.criarForca()
        let vidas = 3
        let check = false
        let pontos = 0
        
        while (vidas != 0) {
            if (pontos == arraySecretoPronto.length) {
                console.log('Voce ganhou')
                return
            }
            const letra = input.question('Digite uma letra ')
            for (let i in this.palavraSecreta) {
                if (letra == this.palavraSecreta[i]) {
                    arraySecretoPronto[i] = letra
                    check = true
                    pontos ++
                } 
            }
            if (check) {
                console.log(arraySecretoPronto)
                check = false
            }
            else {
                vidas --
                console.log(`Nao tem nada lhe resta apenas ${vidas}`)
                if (vidas == 0) {
                    console.log('Voce Perdeu')
                    eturn
                }
            }
        }
        
    }
}

const jogo = new JogoDaForca()
jogo.jogar