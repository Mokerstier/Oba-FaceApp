import {
    renderData
} from './render.js'
import {
    checkAge 
} from './check.js'

function runApi() {
    const cors = 'https://cors-anywhere.herokuapp.com/';
    const endpoint = 'https://zoeken.oba.nl/api/v1/search/?q=';

    const surprised = 'surprised';
    const happy = 'happy';
    const fearfull = 'fearfull';
    const disgusted = 'disgusted';
    const neutral = 'neutral';
    const angry = 'angry';
    const sad = 'sad';

    const key = '03b058d877ec4276bb63dd1c6e1f3768';
    const secret = 'a431539891cc1fe6735239fa1c138ee7';
    const detail = 'Default';

    const urlHappy = `${cors}${endpoint}${happy}&authorization=${key}&detaillevel=${detail}&output=json`;
    const urlYouthHappy = `${cors}${endpoint}${happy}&authorization=${key}&p=jeugd&detaillevel=${detail}&output=json`;

    const urlSurprised = `${cors}${endpoint}${surprised}&authorization=${key}&detaillevel=${detail}&output=json`;
    const urlYouthSurprised = `${cors}${endpoint}${surprised}&authorization=${key}&p=jeugd&detaillevel=${detail}&output=json`;

    const urlFearfull = `${cors}${endpoint}${fearfull}&authorization=${key}&detaillevel=${detail}&output=json`;
    const urlYouthFearfull = `${cors}${endpoint}${fearfull}&authorization=${key}&p=jeugd&detaillevel=${detail}&output=json`;

    const urlDisgusted = `${cors}${endpoint}${disgusted}&authorization=${key}&detaillevel=${detail}&output=json`;
    const urlYouthDisgusted = `${cors}${endpoint}${disgusted}&authorization=${key}&p=jeugd&detaillevel=${detail}&output=json`;

    const urlNeutral = `${cors}${endpoint}${neutral}&authorization=${key}&detaillevel=${detail}&output=json`;
    const urlYouthNeutral = `${cors}${endpoint}${neutral}&authorization=${key}&p=jeugd&detaillevel=${detail}&output=json`;

    const urlAngry = `${cors}${endpoint}${angry}&authorization=${key}&detaillevel=${detail}&output=json`;
    const urlYouthAngry = `${cors}${endpoint}${angry}&authorization=${key}&p=jeugd&detaillevel=${detail}&output=json`;

    const urlSad = `${cors}${endpoint}${sad}&authorization=${key}&detaillevel=${detail}&output=json`;
    const urlYouthSad = `${cors}${endpoint}${sad}&authorization=${key}&p=jeugd&detaillevel=${detail}&output=json`;

    const config = {
        Authorization: `Bearer ${secret}`
    };

    // fetch(urlHappy, config)
    //     .then(response => {
    //         return response.json();
    //     })
    //     .then(data => {
    //         localStorage.setItem('dataOldhappy', JSON.stringify(data))
    //         console.log('old')
    //         checkAge();
    //     })
    //     .catch(err => {
    //         console.log(err);
    //     });

    //     fetch(urlYouthHappy, config)
    //     .then(response => {
    //         return response.json();
    //     })
    //     .then(data => {
    //         localStorage.setItem('dataYouthhappy', JSON.stringify(data))
    //         console.log('young')
    //         checkAge();
    //     })
    //     .catch(err => {
    //         console.log(err);
    //     });

    //     fetch(urlSurprised, config)
    //     .then(response => {
    //         return response.json();
    //     })
    //     .then(data => {
    //         localStorage.setItem('dataOldsurprised', JSON.stringify(data))
    //         console.log('old')
    //         checkAge();
    //     })
    //     .catch(err => {
    //         console.log(err);
    //     });

    //     fetch(urlYouthSurprised, config)
    //     .then(response => {
    //         return response.json();
    //     })
    //     .then(data => {
    //         localStorage.setItem('dataYouthsurprised', JSON.stringify(data))
    //         console.log('young')
    //         checkAge();
    //     })
    //     .catch(err => {
    //         console.log(err);
    //     });

    //     fetch(urlFearfull, config)
    //     .then(response => {
    //         return response.json();
    //     })
    //     .then(data => {
    //         localStorage.setItem('dataOldfearfull', JSON.stringify(data))
    //         console.log('old')
    //         checkAge();
    //     })
    //     .catch(err => {
    //         console.log(err);
    //     });

    //     fetch(urlYouthFearfull, config)
    //     .then(response => {
    //         return response.json();
    //     })
    //     .then(data => {
    //         localStorage.setItem('dataYouthfearfull', JSON.stringify(data))
    //         console.log('young')
    //         checkAge();
    //     })
    //     .catch(err => {
    //         console.log(err);
    //     });

    //     fetch(urlDisgusted, config)
    //     .then(response => {
    //         return response.json();
    //     })
    //     .then(data => {
    //         localStorage.setItem('dataOlddisgusted', JSON.stringify(data))
    //         console.log('old')
    //         checkAge();
    //     })
    //     .catch(err => {
    //         console.log(err);
    //     });

    //     fetch(urlYouthDisgusted, config)
    //     .then(response => {
    //         return response.json();
    //     })
    //     .then(data => {
    //         localStorage.setItem('dataYouthdisgusted', JSON.stringify(data))
    //         console.log('young')
    //         checkAge();
    //     })
    //     .catch(err => {
    //         console.log(err);
    //     });

    //     fetch(urlNeutral, config)
    //     .then(response => {
    //         return response.json();
    //     })
    //     .then(data => {
    //         localStorage.setItem('dataOldneutral', JSON.stringify(data))
    //         console.log('old')
    //         checkAge();
    //     })
    //     .catch(err => {
    //         console.log(err);
    //     });

    //     fetch(urlYouthNeutral, config)
    //     .then(response => {
    //         return response.json();
    //     })
    //     .then(data => {
    //         localStorage.setItem('dataYouthneutral', JSON.stringify(data))
    //         console.log('young')
    //         checkAge();
    //     })
    //     .catch(err => {
    //         console.log(err);
    //     });

    //     fetch(urlAngry, config)
    //     .then(response => {
    //         return response.json();
    //     })
    //     .then(data => {
    //         localStorage.setItem('dataOldangry', JSON.stringify(data))
    //         console.log('old')
    //         checkAge();
    //     })
    //     .catch(err => {
    //         console.log(err);
    //     });

    //     fetch(urlYouthAngry, config)
    //     .then(response => {
    //         return response.json();
    //     })
    //     .then(data => {
    //         localStorage.setItem('dataYouthangry', JSON.stringify(data))
    //         console.log('young')
    //         checkAge();
    //     })
    //     .catch(err => {
    //         console.log(err);
    //     });

        fetch(urlSad, config)
        .then(response => {
            return response.json();
        })
        .then(data => {
            localStorage.setItem('dataOldsad', JSON.stringify(data))
            console.log('old')
            checkAge();
        })
        .catch(err => {
            console.log(err);
        });

        fetch(urlYouthSad, config)
        .then(response => {
            return response.json();
        })
        .then(data => {
            localStorage.setItem('dataYouthsad', JSON.stringify(data))
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