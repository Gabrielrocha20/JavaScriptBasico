

// class Pessoa {
//     constructor (nome, idade, caminhar) {
//         this.nome = nome
//         this.idade = idade

//         this.caminhando = caminhar
//     }

//     descansar() {
//             console.log(`${this.nome} Esta descansando`)
//         }
    
//     desistirDeCaminhar () {
//         console.log(`${this.nome} Cansou de caminhar e esta voltando para casa`)
//         return this.caminhando = false
//     }

//     get caminhar() {
//         let km = 0
        
//         while (km <= 200) {
//             if (km == 0) {
//                 console.log(`${this.nome} começou a caminhar | ${km} km`)
//             }

            
//             if (this.caminhando) {
//                 km += 50
//                 console.log(`${this.nome} Esta caminhando | ${km} km`)
//             } else {
//                 km -= 50
//                 console.log(`${this.nome} Esta a ${km} km de casa`)
//             }
            
//             if (km == 100) {
//                 this.descansar()
//                 console.log(`${this.nome} Voltou a caminhar | ${km} km`)
//             } else if (km == 200) {
//                 this.desistirDeCaminhar()
//             } else if (km == 0) {
//                 console.log(`${this.nome} Chegou em casa`)
//                 return
//             }
//         }
//     }

    
// }

// const pessoa = new Pessoa('Gabriel', 20, true)
// pessoa.caminhar

fetch('GET', 'https://blaze.com/api/roulette_games/recent')
.then(data => {
return data.json();
})
.then(post => {
console.log(post.title);
});
