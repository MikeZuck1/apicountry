let infos = document.querySelector('section'); // retourne la balise section.

let capitalDiv = document.createElement('div');
let flaglDiv = document.createElement('div'); 
let countryDiv = document.createElement('div');

function search() {
    // va retourner l'input text. 
    let textCountry = document.querySelector('.text').value; // récupère la valeur de l'input. 
    countryDiv.innerHTML = `<span>pays</span><br><p>${textCountry}</p>`; 
}; 