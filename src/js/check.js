import {
    renderData
} from "./render.js";


function checkAge(value, genreValue , section) {
 
    if (value <= 12 ) {
        renderData(JSON.parse(localStorage.getItem(`dataYouth${genreValue}`)), section)

    } else {
        renderData(JSON.parse(localStorage.getItem(`dataOld${genreValue}`)), section)

    }
}

export {
    checkAge
}