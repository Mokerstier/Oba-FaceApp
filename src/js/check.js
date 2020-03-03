import { renderData } from "./render.js";


function checkAge (value) {
    console.log('Change ik ?')
        console.log('Ja')
    if (value <= 50){
        renderData(JSON.parse(localStorage.getItem("dataYoth")))
        console.log("kind")
    }
    else{
        renderData(JSON.parse(localStorage.getItem("dataOld")))
        console.log("volwassen")
    }
}

export {
    checkAge
}