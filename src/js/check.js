import {
    renderData
} from "./render.js";


function checkAge(value, genreValue) {
    console.log('Change')
    console.log('value', value)
    if (value <= 12 ) {
        renderData(JSON.parse(localStorage.getItem(`dataYouth${genreValue}`)))
        console.log("kind")
    } else {
        renderData(JSON.parse(localStorage.getItem(`dataOld${genreValue}`)))
        console.log("volwassen")
    }
}

export {
    checkAge
}