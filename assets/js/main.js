/* 
Scrivere un programma che chieda all’utente:
-Il numero di chilometri da percorrere
-Età del passeggero Sulla base di queste informazioni dovrà calcolare il prezzo totale del biglietto di viaggio, secondo le seguenti regole:
-il prezzo del biglietto è definito in base ai km (0.21 € al km)
-va applicato uno sconto del 20% per i minorenni
-va applicato uno sconto del 40% per gli over 65.

Tools:
-prompt
-const-let
-if/else



*/

//Chiedi età utente

const etaUtente = document.getElementById("age");

//Chiedi quanti km deve percorrere l'utente

const km = document.getElementById ("km");

console.log(etaUtente, km);

//Assegno il click al bottone

const buttonGenerate = document.querySelector("button")
console.log(buttonGenerate);
buttonGenerate.addEventListener ("click", function(){
    console.log(etaUtente, km);
})

//Assegna il vaolre dei km e gli sconti

const costoKm = km * 0.21;
let scontoVenti = costoKm*20/100;
let scontoQuaranta = costoKm*40/100;
let scontatoVenti = costoKm-scontoVenti;
let scontatoQuaranta = costoKm-scontoQuaranta;


//Applica sconto per minorenni e maggiorenni
const resultElement = document.getElementById("result");
if (etaUtente >= 18 && etaUtente <= 65)  {
    console.log(costoKm.toFixed(2));
    resultElement.innerHTML = "Il prezzo del biglietto è " + costoKm.toFixed(2)
} else if (etaUtente < 18) {
    console.log(scontatoVenti.toFixed(2));
    resultElement.innerHTML = "Il prezzo del biglietto è " + scontatoVenti.toFixed(2)
} else if (etaUtente > 65) {
    console.log(scontatoQuaranta.toFixed(2));
    resultElement.innerHTML = "Il prezzo del biglietto è " + scontatoQuaranta.toFixed(2)
}