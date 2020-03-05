import { getDatafromCategorie } from "./runApi.js";

const choicesSection = document.querySelector(".intro")
const emotionsSection = document.querySelector(".home")

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
    let optionsInterval = setInterval(() => {
        if (genre.value !== "happy") {
            const img = createElement('img', {
                options: {
                    src: optionsList[count].img,
                    classNames: [optionsList[count].subject, 'options-img']
                }
            })
            clearSection(choicesSection)
            choicesSection.appendChild(img)
            localStorage.setItem("count", count);
            
        } else {
            clearSection(choicesSection)
            clearInterval(optionsInterval)
            renderSub(localStorage.getItem("count"), optionsInterval)
        }
        count = (count + 1) % optionsList.length

    }, 5000)


}
function renderSub(indexCount , optionsInterval) {

    let subInterval = setInterval(() => {

        if (genre.value !== "happy") {
            const sub = createElement('h3', {
                options: {
                    text: optionsList[indexCount].subcategory[subCount],
                }
            })
            localStorage.setItem("subCount", subCount);
            clearSection(choicesSection)
            choicesSection.appendChild(sub)
        } else {
            clearSection(choicesSection)
            clearInterval(subInterval)
            clearInterval(optionsInterval)
            const sub = createElement('h3', {
                options: {
                    text: optionsList[indexCount].subcategory[localStorage.getItem("subCount")],
                }
            })
            getDatafromCategorie(optionsList[indexCount].subcategory[localStorage.getItem("subCount")], choicesSection)
            choicesSection.appendChild(sub)

        }
        subCount = (subCount + 1) % optionsList[indexCount].subcategory.length
    }, 5000)
}

function clearSection(section) {
    Array.from(section.children).map(item => {
        item.remove()
    })
}
function renderData(data, section) {
    const results = data.results;

    clearSection(section)

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
        section.appendChild(bookLink)
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
    renderOptions
}