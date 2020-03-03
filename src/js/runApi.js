import {
    renderData
} from './render.js'
import {
    checkAge 
} from './check.js'

function runApi() {
    let counter = 0;
    const cors = 'https://cors-anywhere.herokuapp.com/';
    const endpoint = 'https://zoeken.oba.nl/api/v1/search/?q=';
    const query = 'erotiek';
    const key = '1e19898c87464e239192c8bfe422f280';
    const secret = '4289fec4e962a33118340c888699438d';
    const detail = 'Default';
    const url = `${cors}${endpoint}${query}&authorization=${key}&detaillevel=${detail}&output=json`;
    const urlYouth = `${cors}${endpoint}${query}&authorization=${key}&p=jeugd&detaillevel=${detail}&output=json`;
    
    // const personAge = document.getElementById('personAge')
    // let value = personAge.value
    
    // if (value <= 12){
    //     const urlYouth = `${cors}${endpoint}${query}&authorization=${key}&p=jeugd&detaillevel=${detail}&output=json`;
    // }
    // else{
    //     const url = `${cors}${endpoint}${query}&authorization=${key}&detaillevel=${detail}&output=json`;
    // }

    const config = {
        Authorization: `Bearer ${secret}`
    };

    fetch(url, config)
        .then(response => {
            return response.json();
        })
        .then(data => {
            localStorage.setItem('dataOld', JSON.stringify(data))
            console.log('old')
            checkAge();
        })
        .catch(err => {
            console.log(err);
        });

        fetch(urlYouth, config)
        .then(response => {
            return response.json();
        })
        .then(data => {
            localStorage.setItem('dataYouth', JSON.stringify(data))
            console.log('young')
            checkAge();
        })
        .catch(err => {
            console.log(err);
        });
}

export {
    runApi
}