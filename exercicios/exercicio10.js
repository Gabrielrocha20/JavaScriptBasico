const input = require('readline-sync')
const dicionarioDeFuncoes = {
    '1': Cadastrar,
    '2': Imprimir,
    '3': Encerrar
}
let count = true
let cadastros = []

function Cadastrar () {
    const nome = input.question('Digite seu nome ')
    const idade = input.question('Digite sua idade ')
    const email = input.question('Digite seu email ')
    const cpf = input.question('Digite seu cpf ')

    cadastros.push({'nome': nome, 'idade': idade, 'email': email, 'cpf': cpf})
}
function Imprimir () {
    console.log(cadastros)
}

function Encerrar() {
    count = false
    return count
}


while (count) {
    const resposta = input.question('Digite Cadastrar[1], Imprimir usuarios[2], Encerrar[3]')
    dicionarioDeFuncoes[resposta]()
    
}

