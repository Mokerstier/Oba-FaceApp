import { router } from "./vendor/routie.js";
import { checkAge } from "./check.js";

router.init();

const personAge = document.getElementById('personAge')
let value = personAge.value

personAge.addEventListener("change", ()=>{
  value = personAge.value
  checkAge(value)
})

(function() {
  if (!window.location.href.includes("#")) window.location = "/#home";
})();
