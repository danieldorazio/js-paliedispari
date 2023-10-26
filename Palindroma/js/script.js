// INPUT
const parola = prompt("inserisci una parola")
console.log(parola, parola.length);


// LOGICA

//analizzare parola lettera per lettera

/**
 * funzione che separa lettera per lettera e la restituisce al contrario 
 * @param {string} word
 * @returns {string}
 */
function invertWord(word) {
    const invertArray = [];
    for (let i = word.length - 1; i >= 0; i--) {
        const element = word[i];
        invertArray.push(element);
    }
    return invertArray;
}

/*******************************/

// INVOCAZIONE
invertWord(parola);
console.log(invertWord(parola));
