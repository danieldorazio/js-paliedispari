// INPUT
const parola = prompt("inserisci una parola")
console.log(parola, parola.length);


// LOGICA

/**
 * funzione che separa lettera per lettera e la restituisce al contrario 
 * @param {string} word
 * @returns {string}
 */
function invertWord(word) {
    let invertArrayElem = "";
    for (let i = word.length - 1; i >= 0; i--) {
        const element = word[i];
        invertArrayElem += element;        
    }
    return invertArrayElem;
}

/***************************************/
/**
 * funzione che paragona la userWord con invertWord e definisce se palindroma 
 * @param {string} word
 * @param {string} invertWord
 * @returns {string}
 */
function polyndrome(word, invertWord) {
    let flage = false
    if (word === invertWord) {
        flage = true;
    }

    let result = ""
    if (flage) {
        result = "palindromo";        
    } else {
        result = "non palindromo";
    }
    return result;    
}

/*******************************/

// INVOCAZIONE
//funzione inverti
const invertString = invertWord(parola);
console.log(invertString);

// funzione paragona
polyndrome( parola, invertString);
console.log(polyndrome(parola, invertString));


