import {
    renderData,
    renderDetail
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
function checkAgeDetails(value, id){
    if (value <= 12 ) {
        renderDetail(JSON.parse(localStorage.getItem(`data${id}`)))
        body.classList.add("kind")

    } else {
        renderDetail(JSON.parse(localStorage.getItem(`data${id}`)))
        body.classList.remove("kind")
    }
}
export {
    checkAge,
    checkAgeDetails
}