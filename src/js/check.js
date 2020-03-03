import {
    renderData
} from "./render.js";


function checkAge(value) {
    console.log('Change')
    console.log('value', value)
    if (value <= 12) {
        renderData(JSON.parse(localStorage.getItem("dataYouth")))
        console.log("kind")
    } else {
        renderData(JSON.parse(localStorage.getItem("dataOld")))
        console.log("volwassen")
    }
}

export {
    checkAge
}