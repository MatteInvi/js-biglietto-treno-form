//Dichiarazione variabili
const numeroKm = document.getElementById("nKm");
const etaUtente = document.getElementById("eta");
const submitButton = document.getElementById("submit");
const userForm = document.getElementById("ticketForm");
const schedaRisultati = document.getElementById("scheda-risultati")

// Elementi di output
const prezzoInteroOut = document.getElementById("prezzo-intero");
const scontoOut = document.getElementById("sconto");
const prezzoFinaleOut = document.getElementById("prezzo-finale");

// Esecuzione funzione
userForm.addEventListener("submit", calcoloPrezzo);

//Funzione di calcolo
function calcoloPrezzo(event) {
    event.preventDefault();
    const chilometri = parseInt(numeroKm.value);
    const eta = parseInt(etaUtente.value);
    const prezzoUnitario = 0.21;
    const prezzoIntero = chilometri * prezzoUnitario;
    let sconto;
    let prezzoFinale;
    if (eta <= 18) {
        sconto = prezzoIntero * 20 / 100;
    } else if (eta > 65) {
        sconto = prezzoIntero * 40 / 100;
    } else {
        sconto = 0;
    }
    prezzoFinale = prezzoIntero - sconto;
    schedaRisultati.classList.remove("d-none");
    schedaRisultati.classList.add("d-flex");

    //Ouput 
    prezzoInteroOut.innerText = prezzoIntero.toFixed(2) + "€";
    scontoOut.innerText = sconto.toFixed(2) + "€";
    prezzoFinaleOut.innerText = prezzoFinale.toFixed(2) + "€";


}