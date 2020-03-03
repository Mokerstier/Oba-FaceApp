import { updateUI } from "./userInterface.js";
import { runApi } from "./runApi.js";

const routes = {
  "home": function() {
    updateUI("home");
    runApi();
    console.log("home");
  },
  "details/:id": function(id) {
    console.log("details");
  }
};

export { routes };
