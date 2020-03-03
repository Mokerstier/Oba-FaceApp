// import {
//     renderData
// } from './render.js'
const {renderData} = require('./render.js')
const axios = require('axios').default

// const fetch = require('node-fetch')

function runApi() {
    const cors = 'https://cors-anywhere.herokuapp.com/';
    const endpoint = 'https://zoeken.oba.nl/api/v1/search/?q=';
    const query = 'austin';
    const key = '1e19898c87464e239192c8bfe422f280';
    const secret = '4289fec4e962a33118340c888699438d';
    const detail = 'Default';
    const url = `${endpoint}${query}&authorization=${key}&detaillevel=${detail}&output=json`;

    const config = axios.create({
        method: 'get',
        headers: {
            Authorization: `Bearer ${secret}`,
            'Content-type': 'application/json',
            'Accept': 'application/json'
        }
    });

    axios.get(url, config)
        .then(response => {
            console.log(response.data)
        })
        .then(data => {
            
            //renderData(data)
        })
        .catch(err => {
            console.log(err);
        });
}

exports.runApi = runApi()
