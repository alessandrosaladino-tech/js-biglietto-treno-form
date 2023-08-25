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
-inner.html
-getElementById
-console.log



*/

//Dichiaro i bottoni e definisco le variabili iniziali che l'utente deve inserire

const button = document.getElementById("generatePrice");
const result = document.getElementById("priceResult");

//Comportamento al click del bottone
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
            nomePasseggero.innerHTML = `${passengerName}`;
            offerta.innerHTML = "Biglietto Giovani"
            numeroCarrozza.innerHTML = Math.floor((Math.random() * 10) + 1);
            cpcode.innerHTML = Math.floor((Math.random() * 400) + 500);
            prezzoBiglietto.innerHTML = discountedPrice;
        } 
        
        else if (age == "anziano") {
            const price = distance * 0.21;
            console.log("Il prezzo è " + price);
            const sconto40 = (price * 40) / 100;
            console.log("Lo sconto applicato è di: " + sconto40);
            const discountedPrice = (price - sconto40).toFixed(2);
            console.log("Il prezzo scontato del biglietto è " + discountedPrice);
            nomePasseggero.innerHTML = `${passengerName}`;
            offerta.innerHTML = "Biglietto Anziani";
            numeroCarrozza.innerHTML = Math.floor((Math.random() * 10) + 1);
            cpcode.innerHTML = Math.floor((Math.random() * 400) + 500);
            prezzoBiglietto.innerHTML = discountedPrice;
        } 
        
        else {
            console.log("Il passeggero è adulto");
            const price = (distance * 0.21).toFixed(2);
            nomePasseggero.innerHTML = `${passengerName}`;
            offerta.innerHTML = "Biglietto Standard"
            numeroCarrozza.innerHTML = Math.floor((Math.random() * 10) + 1);
            cpcode.innerHTML = Math.floor((Math.random() * 400) + 500);
            prezzoBiglietto.innerHTML = price;
            console.log("Il prezzo è " + price); 
                  
        }
    }
});



//Al click del bottone l'output deve restituire il biglietto sotto forma visiva