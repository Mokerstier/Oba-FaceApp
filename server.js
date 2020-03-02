const express = require('express');
// const routes = require('./src/js/vendor/routie')

require('dotenv').config();

const port = process.env.PORT
const app = express()
const { routes } = require("./src/js/vendor/routes")

app
    .use(express.static(__dirname, +'/public'))
    .use('/', routes)

    .set('view engine', 'ejs')
;

app.listen(port, () => console.log(`server is gestart op port ${port}`))