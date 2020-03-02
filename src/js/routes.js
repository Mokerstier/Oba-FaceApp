import {
    updateUI
} from './userInterface.js'

const routes = {
    'home': function () {
        updateUI("home")
    },
    'details/:id': function (id) {

    },
}

export {
    routes
}