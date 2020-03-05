import {
    renderData
} from "./render.js";

const body = document.querySelector("body")

function checkAge(value, genreValue , section) {
 
    if (value <= 12 ) {
        renderData(JSON.parse(localStorage.getItem(`dataYouth${genreValue}`)), section)
        body.classList.add("kind")

    } else {
        renderData(JSON.parse(localStorage.getItem(`dataOld${genreValue}`)), section)
        body.classList.remove("kind")
    }
}

export {
    checkAge
}