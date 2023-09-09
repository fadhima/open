function retourmessageScore(score, nombreQuestions) {
    
     let message = 'Votre score est de ' + score + ' sur' +nombreQuestions

     return message
}

let returnFonction = retourmessageScore(2, 5)

console.log(returnFonction)

let nonNombre = 1


function afficheUnNombre(){
 let nombreLocal = 2

 console.log("Interieur de la fonction")
 console.log(monNombre)
 console,log(monNombreLocal)
}

afficheUnNombre()

console.log("Exterieur de la fonction")
console.log(nomNombre)
console.log(monNombreLocal)