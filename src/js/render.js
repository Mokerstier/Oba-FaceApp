import { getDatafromCategorie } from "./runApi.js";

const main = document.querySelector('main');

let count = 0;
let subCount = 0;
const genre = document.getElementById("genre");

const optionsList = [
    {
        subject: "dieren",
        img: "https://www.vvhellas.nl/wp-content/uploads/2017/10/volleybalvereniging-hellas-nunspeet-heren1-dieren-op-bezoek.jpg",
        subcategory: [
            "wilde dieren",
            "huisdieren"
        ]
    },
    {
        subject: "sport",
        img: "https://www.1limburg.nl/sites/default/files/public/styles/media-paragraph/public/635291.jpg?itok=Fc7C_bcJ",
        subcategory: [
            "voetbal",
            "basketball"
        ]
    },
    {
        subject: "landen",
        img: "https://www.kaartenenatlassen.nl/sites/default/files/styles/product_image/public/ENG_GL_NA_550_3000PX.jpg?itok=zFdyRNKf",
        subcategory: [
            "architectuur",
            "geschiedenis"
        ]
    },
    {
        subject: "transport",
        img: "https://lh3.googleusercontent.com/proxy/6khZzqbkiv3QJn4IPkdwQncJH1E3Az9id9P4pYKMgoFJs_KCXUgTIRu1YsXljOmE-QW8cafoPWx516aHgWm5o5xk5VUKWWB7u2nQ-n12HTO7zCARk57JuMYeVpYu_MRnC3A",
        subcategory: [
            "trein",
            "auto"
        ]
    },
]

function renderOptions() {
    //Logica voor de lijst met keuzes
    // foto if(happy) => 
    
    // optionsList.map(item => {
    //    const img = createElement('img', {
    //         options:{
    //             src: item.img,
    //             classNames: [item.subject, 'options-img']
    //         }
    //     })
    //     main.appendChild(img)
    // })
    

    let optionsInterval = setInterval(() => {
        // if (count == 4) {
        //     count = 0;
        // }
        // count = (count + 1) % optionsList.length
       // console.log(count, optionsList.length, count % optionsList.length )
        if (genre.value !== "happy") {
            const img = createElement('img', {
                options: {
                    src: optionsList[count].img,
                    classNames: [optionsList[count].subject, 'options-img']
                }
                
            })
            clearMain()
            main.appendChild(img)
            localStorage.setItem("count", count);
            // count++
            console.log(`de huidige count = ${count}`)
            // if(count == 0){
            //     console.log("verderrrrrrrrrrrrrr")
            //     console.log(optionsList[count].subject)
            //     getDatafromCategorie(optionsList[count].subject)
            // }else{
            //     console.log("verderrrrrrrrrrrrrr")
            //     console.log(optionsList[count-1].subject)
            //     getDatafromCategorie(optionsList[count-1].subject)
            // }
        } else {
            clearMain()
            clearInterval(optionsInterval)
            console.log(`gekozen count ${localStorage.getItem("count")}`)
            renderSub(localStorage.getItem("count"))
        }
        count = (count + 1) % optionsList.length
        
    }, 5000)


}
function renderSub(count){
    
    console.log('hallo sub')
    let subInterval = setInterval(() => {
        console.log("sub begint")
        // if (subCount == 2) {
        //     subCount = 0
        // }
        // subCount = (subCount + 1) % optionsList[count].subcategory.length
        if (genre.value == "happy") {
            clearMain()
            clearInterval(subInterval)
            if (count == 0) {
                if (subCount == 0) {
                    console.log('print eerste Subtext')
                    const sub = createElement('h3', {
                        options: {
                            text: optionsList[0].subcategory[localStorage.getItem("subCount")],
                        }
                    })
                    getDatafromCategorie(optionsList[0].subcategory[localStorage.getItem("subCount")])
                    main.appendChild(sub)

                } else {
                    console.log('print tweede Subtext')
                    const sub = createElement('h3', {
                        options: {
                            text: optionsList[0].subcategory[localStorage.getItem("subCount")],
                        }
                    })
                    getDatafromCategorie(optionsList[0].subcategory[localStorage.getItem("subCount")])
                    main.appendChild(sub)

                }
            } else {
                if (subCount == 0) {
                    const sub = createElement('h3', {
                        options: {
                            text: optionsList[count].subcategory[localStorage.getItem("subCount")],
                        }
                    })

                    main.appendChild(sub)
                    getDatafromCategorie(optionsList[count].subcategory[localStorage.getItem("subCount")])
                } else {
                    const sub = createElement('h3', {
                        options: {
                            text: optionsList[count].subcategory[localStorage.getItem("subCount")],
                        }
                    })  
                    getDatafromCategorie(optionsList[count].subcategory[localStorage.getItem("subCount")])
                    main.appendChild(sub)

                }
            }
        } else {
            if (count == 0) {
                if (subCount == 0) {
                    const sub = createElement('h3', {
                        options: {
                            text: optionsList[0].subcategory[0],
                        }
                    })
                    clearMain()
                    
                    main.appendChild(sub)
                    localStorage.setItem("subCount", subCount);
                    //subCount = subCount +1
                    subCount = (subCount + 1) % optionsList[count].subcategory.length
                    //console.log("count 0 sub 0")

                } else {
                    const sub = createElement('h3', {
                        options: {
                            text: optionsList[0].subcategory[subCount],
                        }
                    })
                    clearMain()
                    main.appendChild(sub)
                    //subCount = subCount +1
                    localStorage.setItem("subCount", subCount);
                    subCount = (subCount + 1) % optionsList[count].subcategory.length
                    //console.log("count 0 sub niet")
                }

            } else {
                if (subCount == 0) {
                    const sub = createElement('h3', {
                        options: {
                            text: optionsList[count].subcategory[0],
                        }
                    })

                    clearMain()
                    main.appendChild(sub)
                    //subCount = subCount +1
                    localStorage.setItem("subCount", subCount);
                    subCount = (subCount + 1) % optionsList[count].subcategory.length
                    //console.log("count niet sub 0")

                } else {
                    const sub = createElement('h3', {
                        options: {
                            text: optionsList[count].subcategory[subCount],
                        }
                    })

                    clearMain()
                    main.appendChild(sub)
                    //subCount = subCount +1
                    localStorage.setItem("subCount", subCount);
                    subCount = (subCount + 1) % optionsList[count].subcategory.length
                    //console.log("count niet sub niet")

                }
            }
        }
    }, 5000)
}

function clearMain() {
    Array.from(main.children).map(item => {
        item.remove()
    })
}
function renderData(data) {
    const results = data.results;
    console.log(results);
    clearMain()

    results.forEach(book => {
        const title = createElement('h3', {
            options: {
                text: book.titles[0]
            }
        })
        const cover = createElement('img', {
            options: {
                src: book.coverimages[1],
                classNames: ['book-cover']
            }
        })
        const card = createElement('article', {
            options: {
                classNames: ['card-body']
            },
            children: [title, cover]
        })
        const bookLink = createElement('a', {
            options: {
                href: `#${book.id}`
            },
            children: [card]
        })
        main.appendChild(bookLink)
    });

}

function createElement(tag, { options, children }) {
    const element = document.createElement(tag)

    if (options.classNames) {
        options.classNames.forEach(className => {
            element.classList.add(className)
        })
    }
    if (options.text) {
        element.innerText = options.text
    }
    if (options.href) {
        element.setAttribute('href', options.href)
    }
    if (options.src) {
        element.setAttribute('src', options.src)
    }
    if (children) {
        children.forEach(child => {
            element.appendChild(child)
        });
    }
    return element
}

export {
    renderData,
    clearMain,
    renderOptions
}