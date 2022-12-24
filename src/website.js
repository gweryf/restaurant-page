import addDescr from "./home"
import renderMenu from "./menu"

function addNav() {
    const navbar = document.createElement('nav')
    navbar.classList.add('navbar')
    
    const resrtname = document.createElement('div')
    resrtname.innerText = 'Food Court'
    resrtname.classList.add('logo')

    const options = document.createElement('div')
    options.classList.add('navbut')

    const home = document.createElement('button')
    home.innerText = 'Home'
    const menu = document.createElement('button')
    menu.innerText = 'Menu'
    menu.addEventListener('click',()=>{
        renderMenu()
    })
    const about = document.createElement('button')
    about.innerText = 'About'

    navbar.appendChild(resrtname)
    options.appendChild(home)
    options.appendChild(menu)
    options.appendChild(about)
    navbar.appendChild(options)
    return navbar
}

function addFooter() {
    const webfooter = document.createElement('footer')
    webfooter.classList.add('foot')
    webfooter.innerText = 'Copyright © 2022 Priyam Shrivastava'
    return webfooter
}

function renderPage() {
    const divele = document.getElementById('content')
    const body = document.querySelector('body')
    // body.appendChild(addDescr())
    divele.appendChild(addNav())
    divele.appendChild(addDescr())
    divele.appendChild(addFooter())
}

export default renderPage