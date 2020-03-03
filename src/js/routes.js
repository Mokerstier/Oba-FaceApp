import {
  updateUI
} from "./userInterface.js";
import {
  runApi
} from "./runApi.js";
import {
  checkAge
} from "./check.js";

const routes = {
  "home": function () {
    updateUI("home");
    runApi();
    const genre = document.getElementById("genre");
    const personAge = document.getElementById('personAge');

    personAge.addEventListener("click", () => {
      let value = personAge.value;
      let genreValue = genre.value;
      console.log('im going to change');
      checkAge(value, genreValue)
    })
    genre.addEventListener("click", () => {
      let value = personAge.value;
      let genreValue = genre.value;
      console.log('im going to change');
      checkAge(value, genreValue)
    })
    console.log("home");
  },
  "details/:id": function (id) {
    console.log("details");
  }
};

export {
  routes
};