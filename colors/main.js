import './style.css';

const input = document.querySelector("#tirage")
const form = document.querySelector("form")
const results = document.querySelector("#results")

console.log(form)

form.addEventListener("submit", (event) => {
    event.preventDefault() ;

    const listFilms = input.value ;

    const arrayFilms = listFilms.split(';') ;

    const longueur = arrayFilms.length ;

    const randomNumber = Math.floor(Math.random()*longueur) ;

    console.log(randomNumber) ;

    results.innerText = arrayFilms[randomNumber] ;
}

)