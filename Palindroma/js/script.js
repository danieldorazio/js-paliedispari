// INPUT
const parola = prompt("inserisci una parola")
console.log(parola, parola.length);




// LOGICA

function wordElem(word) {
   const wordElem = [];
    for (let i = 0; i < word.length; i++) {
        const element = word[i];
        wordElem.push(element);
    } 
    return wordElem;
    console.log(wordElem);
}


/**
 * funzione che separa lettera per lettera e la restituisce al contrario 
 * @param {string} word
 * @returns {string}
 */
function invertWord(word) {
    const invertArrayElem = [];
    for (let i = word.length - 1; i >= 0; i--) {
        const element = word[i];
        invertArrayElem.push(element);        
    }
    return invertArrayElem;
    console.log(invertArrayElem);
}

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
const invertString = invertWord(parola);
console.log(invertString);

const wordString = wordElem(parola);
console.log(wordString);

polyndrome( wordString, invertString);
console.log(polyndrome("anna", "anna"));


