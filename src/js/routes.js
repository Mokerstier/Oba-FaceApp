import {
  updateUI
} from "./userInterface.js";
import {
  runApi, getBookByid
} from "./runApi.js";
import {
  checkAge, checkAgeDetails
} from "./check.js";
import { renderOptions } from "./render.js";

const routes = {
  "intro": function() {
    updateUI("intro");
    renderOptions();

    const opnieuwBtn = document.querySelector("button");
    opnieuwBtn.classList.add("display");
    opnieuwBtn.addEventListener('click', ()=>{
      location.reload();
    })
  },
  "home": function () {
    updateUI("home");
    runApi();
    const opnieuwBtn = document.querySelector("button");
    opnieuwBtn.classList.remove("display");
    opnieuwBtn.addEventListener('click', ()=>{
      location.reload();
    })
    const genre = document.getElementById("genre");
    const personAge = document.getElementById('personAge');
    const emotionSection = document.querySelector('.home');

    personAge.addEventListener("click", () => {
      let value = personAge.value;
      let genreValue = genre.value;

      checkAge(value, genreValue, emotionSection)
    })
    genre.addEventListener("click", () => {
      let value = personAge.value;
      let genreValue = genre.value;

      checkAge(value, genreValue, emotionSection)
    })
  },
  "details/:id": function(id){
    getBookByid(id)
    const personAge = document.getElementById('personAge');
    personAge.addEventListener("click", () => {
      let value = personAge.value;
      checkAgeDetails(value, id)
    })
    updateUI('details')
  }
};

export {
  routes
};