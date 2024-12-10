/*
Descrizione
Attraverso l’apposita API di Boolean

https://flynn.boolean.careers/exercises/api/random/mail

generare 10 indirizzi email e stamparli in pagina all’interno di una lista.

Bonus
Abbellire con CSS o Bootstrap

Inserire un bottone che al click faccia il fetch altre 10 mail (sostituendo le altre)

Mostrare le 10 email solo quando solo al termine delle 10 chiamate all’API

*/

const btn = document.querySelector('.btn');
const list = document.querySelector('ul');
const loader = document.querySelector('.spinner');

btn.addEventListener('click', fetchEmails)

const endpoint = 'https://flynn.boolean.careers/exercises/api/random/mail';
const limite = 10;
let emails = [];


start()


function fetchEmails() {
    console.log('chiamata a API');
    emails = [];
    loader.classList.remove('d-none');
    list.classList.add('d-none')
    list.innerHTML = '';

    for (let i = 0; i < limite; i++) {
        axios.get(endpoint)
          .then(email => {
            emails.push(email.data.response)
            if (emails.length === limite) emailStampate()
            
          })
    }
    
}

function emailStampate() {
    loader.classList.add('d-none')
    list.classList.remove('d-none')
    emails.forEach(mail => list.innerHTML += `<li class="list-group-item">${mail}</li>`)
}

function start() {
    list.classList.add('d-none');
    loader.classList.add('d-none');
}

