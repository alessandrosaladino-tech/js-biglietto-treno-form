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

//Dichiaro i bottoni e definisco le variabili iniziali che l'utente deve inserire

const button = document.getElementById("generatePrice");
const result = document.getElementById("priceResult");

button.addEventListener("click", function priceCalc() 
{

    const passengerName = document.getElementById("userName").value;

    console.log("Il nome del passeggero è " + passengerName);

    const distance = document.getElementById("distance").value;

    console.log("La distanza da percorrere è: " + distance);

    const age = document.getElementById("ageRange").value

    console.log("L'età del passeggero è: " + age);


//Inserisco il risultato con le condizioni e lo stampo sia in console che in pagina
    if (distance == 0 || passengerName == 0) {
        result.innerHTML = "Uno dei valori inseriti è nullo. Ricompila il form!"
    } 
    
    else 
    {
        if (age == "minore") {
            const price = distance * 0.21;
            console.log("Il prezzo è di" + price);
            const sconto20 = (price * 20) / 100;
            console.log("lo sconto applicato è di: " + sconto20);
            const discountedPrice = (price - sconto20).toFixed(2);
            console.log("Il prezzo scontato del biglietto è " + discountedPrice);
            result.innerHTML = `${passengerName}, il prezzo del biglietto per la distanza richiesta è di ${discountedPrice}€.`
        } 
        
        else if (age == "anziano") {
            const price = distance * 0.21;
            console.log("Il prezzo è " + price);
            const sconto40 = (price * 40) / 100;
            console.log("Lo sconto applicato è di: " + sconto40);
            const discountedPrice = (price - sconto40).toFixed(2);
            console.log("Il prezzo scontato del biglietto è " + discountedPrice);
            result.innerHTML = `${passengerName}, il prezzo del biglietto per la distanza richiesta è di ${discountedPrice}€.`
        } 
        
        else {
            console.log("Il passeggero è adulto");
            const price = (distance * 0.21).toFixed(2);
            result.innerHTML = `${passengerName}, il prezzo del biglietto per la distanza richiesta è di ${price}€`
            console.log("Il prezzo è " + price);        
        }
    }
});

//Al click del bottone l'output deve restituire il biglietto sotto forma visiva