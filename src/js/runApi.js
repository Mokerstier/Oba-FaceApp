import {
    renderData
} from './render.js'
import {
    checkAge 
} from './check.js'

function getDatafromCategorie(subject) {
    const cors = 'https://cors-anywhere.herokuapp.com/';
    const endpoint = 'https://zoeken.oba.nl/api/v1/search/?q=';
    
    const key = '1e19898c87464e239192c8bfe422f280';
    const secret = '4289fec4e962a33118340c888699438d';
    const detail = 'Default';

    const config = {
        Authorization: `Bearer ${secret}`
    };

    const url = `${cors}${endpoint}${subject}&authorization=${key}&detaillevel=${detail}&output=json`
    const youthUrl = `${cors}${endpoint}${subject}&authorization=${key}&p=jeugd&detaillevel=${detail}&output=json`

    const personAge = document.getElementById('personAge');

    if(!localStorage.getItem(`dataOld${subject}`)){
        fetch(url, config)
            .then(response => {
                return response.json();
            })
            .then(data => {
                localStorage.setItem(`dataOld${subject}`, JSON.stringify(data))
                console.log(data)
                let value = personAge.value
                checkAge(value, subject);
            })
            .catch(err => {
                console.log(err);
            });
        }else {
            console.log(JSON.parse(localStorage.getItem(`dataOld${subject}`)))
            let value = personAge.value
            checkAge(value, subject);
        }
    if(!localStorage.getItem(`dataYouth${subject}`)){
            fetch(youthUrl, config)
                .then(response => {
                    return response.json();
                })
                .then(data => {
                    localStorage.setItem(`dataYouth${subject}`, JSON.stringify(data))
                    console.log(data)
                    let value = personAge.value
                    checkAge(value, subject);
                })
                .catch(err => {
                    console.log(err);
                });
            }else {
                console.log(JSON.parse(localStorage.getItem(`dataYouth${subject}`)))
                let value = personAge.value
                checkAge(value, subject);
            }
}
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

    const key = '1e19898c87464e239192c8bfe422f280';
    const secret = '4289fec4e962a33118340c888699438d';
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

    if(!localStorage.getItem('dataOldhappy')){
    fetch(urlHappy, config)
        .then(response => {
            return response.json();
        })
        .then(data => {
            localStorage.setItem('dataOldhappy', JSON.stringify(data))
            console.log('old')
            checkAge();
        })
        .catch(err => {
            console.log(err);
        });
    }
    
    if(!localStorage.getItem('dataYouthhappy')){
        fetch(urlYouthHappy, config)
        .then(response => {
            return response.json();
        })
        .then(data => {
            localStorage.setItem('dataYouthhappy', JSON.stringify(data))
            console.log('young')
            checkAge();
        })
        .catch(err => {
            console.log(err);
        });
    }

    if(!localStorage.getItem('dataOldsurprised')){
        fetch(urlSurprised, config)
        .then(response => {
            return response.json();
        })
        .then(data => {
            localStorage.setItem('dataOldsurprised', JSON.stringify(data))
            console.log('old')
            checkAge();
        })
        .catch(err => {
            console.log(err);
        });
    }

    if(!localStorage.getItem('dataYouthsurprised')){
        fetch(urlYouthSurprised, config)
        .then(response => {
            return response.json();
        })
        .then(data => {
            localStorage.setItem('dataYouthsurprised', JSON.stringify(data))
            console.log('young')
            checkAge();
        })
        .catch(err => {
            console.log(err);
        });
    }

    if(!localStorage.getItem('dataOldfearfull')){
        fetch(urlFearfull, config)
        .then(response => {
            return response.json();
        })
        .then(data => {
            localStorage.setItem('dataOldfearfull', JSON.stringify(data))
            console.log('old')
            checkAge();
        })
        .catch(err => {
            console.log(err);
        });
    }

    if(!localStorage.getItem('dataYouthfearfull')){
        fetch(urlYouthFearfull, config)
        .then(response => {
            return response.json();
        })
        .then(data => {
            localStorage.setItem('dataYouthfearfull', JSON.stringify(data))
            console.log('young')
            checkAge();
        })
        .catch(err => {
            console.log(err);
        });
    }

    if(!localStorage.getItem('dataOlddisgusted')){
        fetch(urlDisgusted, config)
        .then(response => {
            return response.json();
        })
        .then(data => {
            localStorage.setItem('dataOlddisgusted', JSON.stringify(data))
            console.log('old')
            checkAge();
        })
        .catch(err => {
            console.log(err);
        });
    }

    if(!localStorage.getItem('dataYouthdisgusted')){
        fetch(urlYouthDisgusted, config)
        .then(response => {
            return response.json();
        })
        .then(data => {
            localStorage.setItem('dataYouthdisgusted', JSON.stringify(data))
            console.log('young')
            checkAge();
        })
        .catch(err => {
            console.log(err);
        });
    }

    if(!localStorage.getItem('dataOldneutral')){
        fetch(urlNeutral, config)
        .then(response => {
            return response.json();
        })
        .then(data => {
            localStorage.setItem('dataOldneutral', JSON.stringify(data))
            console.log('old')
            checkAge();
        })
        .catch(err => {
            console.log(err);
        });
    }

    if(!localStorage.getItem('dataYouthneutral')){
        fetch(urlYouthNeutral, config)
        .then(response => {
            return response.json();
        })
        .then(data => {
            localStorage.setItem('dataYouthneutral', JSON.stringify(data))
            console.log('young')
            checkAge();
        })
        .catch(err => {
            console.log(err);
        });
    }

    if(!localStorage.getItem('dataOldangry')){
        fetch(urlAngry, config)
        .then(response => {
            return response.json();
        })
        .then(data => {
            localStorage.setItem('dataOldangry', JSON.stringify(data))
            console.log('old')
            checkAge();
        })
        .catch(err => {
            console.log(err);
        });
    }

    if(!localStorage.getItem('dataYouthangry')){
        fetch(urlYouthAngry, config)
        .then(response => {
            return response.json();
        })
        .then(data => {
            localStorage.setItem('dataYouthangry', JSON.stringify(data))
            console.log('young')
            checkAge();
        })
        .catch(err => {
            console.log(err);
        });
    }

    if (!localStorage.getItem('dataOldsad')){
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
    }

    if (!localStorage.getItem('dataYouthsad')){
        console.log('fetching sad-Youth')
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
}

export {
    runApi,
    getDatafromCategorie
}