import {
    router
} from "./vendor/routie";

router.init()

(function () {
    if (!window.location.href.includes('#')) window.location = '/#home'
})()