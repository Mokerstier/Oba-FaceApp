import { router } from "./vendor/routie";
import "../css/styles.css";
import "babel-polyfill";

router.init();
(function() {
  if (!window.location.href.includes("#")) window.location = "/#home";
})();
