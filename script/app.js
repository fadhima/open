

/*let score = 0

// Déclaration de la variable contenant le choix de l'utilisateur
let choix = prompt("Avec quelle liste désirez-vous jouer : 'mots' ou 'phrases' ?")
// Tant que l'utilisateur n'a pas saisi "mots" ou "phrases", on lui redemande de saisir un choix
while (choix !== "mots" && choix !== "phrases") {
    choix = prompt("Avec quelle liste désirez-vous jouer : 'mots' ou 'phrases' ?")
}

if (choix === "mots") {
    // On parcourt le tableau des mots
    for (let i = 0; i < listeMots.length; i++) {
        // On demande à l'utilisateur de saisir le mot correspondant à l'indice i
        let motUtilisateur = prompt("Entrez le mot : " + listeMots[i])
        if (motUtilisateur === listeMots[i]) {
            // Si le mot saisi par l'utilisateur est correct, on incrémente le score
            score++
        }
    }
    console.log("Votre score est de " + score + " sur " + listeMots.length)
} else {
    // On parcourt le tableau des phrases
    for (let i = 0; i < listePhrases.length; i++) {
        // On demande à l'utilisateur de saisir la phrase correspondant à l'indice i
        let phraseUtilisateur = prompt("Entrez la phrase : " + listePhrases[i])
        if (phraseUtilisateur === listePhrases[i]) {
            // Si la phrase saisi par l'utilisateur est correct, on incrémente le score
            score++
        }
    }
    console.log("Votre score est de " + score + " sur " + listePhrases.length)
}
*/

function afficheresultat(score, nombreMots){

    console.log("Votre score est de " +score + "sur" +  nombreMots)

}

function ChoisirPrasesOuMots(){
    
    let choix = prompt("Avec quelle liste désirez-vous jouer : 'mots' ou 'phrases' ?")

    // Tant que l'utilisateur n'a pas saisi "mots" ou "phrases", on lui redemande de saisir un choix

    while (choix !== "mots" && choix !== "phrases") {

        choix = prompt("Avec quelle liste désirez-vous jouer : 'mots' ou 'phrases' ?")
    }

    return choix
}

function lancerBoucleJeu(listeProposition) {

    for (let i = 0; i < listeProposition.length; i++) {

        // On demande à l'utilisateur de saisir le mot correspondant à l'indice i

        let motUtilisateur = prompt("Entrez le mot : " + listeProposition[i])

        if (motUtilisateur === listeProposition[i]) {

            // Si le mot saisi par l'utilisateur est correct, on incrémente le score
            score++
        }
    }
        return score
    
 }


 function lancerJeu(){

   let choix = ChoisirPrasesOuMots()

   score = 0

   nombreMots = 0

   if (choix === "mots"){

        lancerBoucleJeu(listeMots)
        nombreMots = listeMots.length
   }
   else{

        lancerBoucleJeu(listePhrases)

        nombreMots = listePhrases.length
  }
  
  afficheresultat(score, nombreMots)

}
lancerJeu()

