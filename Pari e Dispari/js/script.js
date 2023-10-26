// DATI
// scelta pari o dispari
const sceltaUser = prompt("scegli: Pari o Dispari");
const sceltaUserUpper = sceltaUser.toUpperCase();
console.log(sceltaUserUpper);

// scelta del numero
const userNumber = parseInt(prompt("inserisci un numero tra 1 a 5"));
console.log(userNumber);

// LOGICA

// NUMERO RANDOM
/**
 * funzione che crea un numero random con un valore di min e un valore di max 
 * @param {number} minNumber
 * @returns {number} maxNumber
 */
function numberGenerator(minNumber, maxNumber) {
    let number = Math.floor(Math.random() * (maxNumber -minNumber + 1) ) + minNumber;
    return number
}

// SOMMA E PARI E DISPARI
/**
 * funzione che all'ingresso ha 2 numeri e restiusci una stringa con pari o dispari 
 * @param {number} firstNumber
 * @param {number} secondNumber
 * @returns {string}
 */
function evenOrOddSum(firstNumber, secondNumber) {
    const somma = firstNumber + secondNumber;
    
    let flage = "DISPARI";
    if (somma % 2 === 0) {
        flage = "PARI"
    }
    return flage
}


// DEFINIRE CHI HA VINTO
/**
 * funzione che difinisce un vincitore mettendo a paragone la scelta dell'utente con il risultato della somma
 * @param {string} choiceUser
 * @param {string} sumResult
 * @returns {string}
 */
function defineWinner(choiceUser, sumResult) {
    let result = "HAI PERSO";
    if (choiceUser === sumResult) {
        result = "HAI VINTO";
    }
    return result
}

/******************************/
// INVOCAZIONE

const numberPc = numberGenerator(5, 1);
console.log(numberPc);

const evenOdd = evenOrOddSum(userNumber, numberPc);
console.log(evenOdd);

const result = defineWinner(sceltaUser, evenOdd);
console.log(result);