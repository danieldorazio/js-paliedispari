
**Pari e Dispari**

L’utente sceglie pari o dispari e inserisce un numero da 1 a 5.
Generiamo un numero random (sempre da 1 a 5) per il computer (usando una funzione).
Sommiamo i due numeri
Stabiliamo se la somma dei due numeri è pari o dispari (usando una funzione)
Dichiariamo chi ha vinto.

**Esecuzione**

**DATI**
Input Pari o Dispari (scletaUser)
Input numero tra 1 e 5 (userNamber)

**Logica**

Creare numero random del computer
- utilizzare math.random

Sommare e valutare che sia pari o dispari 
- se (userNumber + pcNumber % 2 ===0 )
    - pari 
- altrimenti 
    - dispari 

Definire chi ha vinto 
- se sceltaUser === al risultato della funzine pari e dispari 
    - hai vinto
- altrimenti 
    - hai perso 

