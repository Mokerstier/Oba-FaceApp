function renderData(data) {
    const results = data.results;
    console.log(results);
    const main = document.querySelector('main');
    Array.from(main.children).map(item => {
        item.remove()
    })
    
    results.forEach(element => {
        const title = createElement('h3',{
            options:{
                text: element.titles[0]
            } 
        })
        const cover = createElement('img', {
            options: {
                src: element.coverimages[1],
                classNames: ['book-cover']
            }
        })
        const card = createElement('article',{
            options: {
                classNames: ['card-body']
            },
            children: [ title, cover ]
        })
        main.appendChild(card)
    });
    
}

function createElement(tag, { options, children }) {
    const element = document.createElement(tag)
    
    if (options.classNames) {
        options.classNames.forEach(className =>{
            element.classList.add(className)
        })
    }
    if (options.text) {
      element.innerText = options.text
    }
    if (options.href){
        element.setAttribute('href', options.href)
    }
    if (options.src){
      element.setAttribute('src', options.src)
    }
    if (children){
      children.forEach(child => {
        element.appendChild(child)
      });
    }
    return element
  }

export {
    renderData
}