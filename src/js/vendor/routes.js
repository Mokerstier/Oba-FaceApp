function routes() {
    const Routes = require("express").Router()
    Routes.get('/', (req, res) =>{
        res.render("../../index.html", {
            title: "Facebook"
        });
    })
    return Routes
}
exports.routes = routes();