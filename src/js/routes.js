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

    const personAge = document.getElementById('personAge');
    console.log(personAge)

    personAge.addEventListener("click", () => {
      let value = personAge.value;
      console.log('im going to change');
      checkAge(value)
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