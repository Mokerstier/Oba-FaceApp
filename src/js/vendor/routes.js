const runApi = require('../runApi')

function routes() {
    const Routes = require("express").Router()
    Routes.get('/', (req, res) =>{
        res.render("../../index.html", {
            title: "Facebook"
        });
        runApi()

        // console.log(results);
    })
    return Routes
}
exports.routes = routes();