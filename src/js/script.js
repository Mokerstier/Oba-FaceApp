import { router } from "./vendor/routie.js";

router.init();
(function() {
  if (!window.location.href.includes("#")) window.location = "/#home";
})();
