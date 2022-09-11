// > COERÇÃO (CONVERÇÃO) DE TIPOS

// - 1 COERÇÃO EXPLICITA (MANUAL)

const numero = 10
console.log(numero, typeof numero)

const numeroEmFormatoDeString = String(numero)
console.log(numeroEmFormatoDeString, typeof numeroEmFormatoDeString)

console.log(parseFloat(1.40))
console.clear()
// - 2 COERÇÃO IMPLICITA (AUTOMATICA)

console.log('2' * 10)

// OUTROS EXEMPLOS

// // QUAL SERA A SAIDA DESSE CODIGO?
console.log(2 + 3 + 4 + '5') //95

// // QUAL SERA A SAIDA DESSE CODIGO?
console.log('5' + 2 + 3 + 4) //5234

// // QUAL SERA A SAIDA DESSE CODIGO?
console.log('10' - '4' - '3' - 2 + '5') //15
