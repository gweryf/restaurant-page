function addNav() {
    const navbar = document.createElement('nav')
    navbar.classList.add('navbar')
    
    const resrtname = document.createElement('div')
    resrtname.innerText = 'Food Court'

    const options = document.createElement('div')

    const home = document.createElement('div')
    home.innerText = 'Home'
    const menu = document.createElement('div')
    menu.innerText = 'Menu'
    const about = document.createElement('div')
    about.innerText = 'About'

    navbar.appendChild(resrtname)
    options.appendChild(home)
    options.appendChild(menu)
    options.appendChild(about)
    navbar.appendChild(options)
    return navbar
}

function renderPage() {
    const divele = document.getElementById('content')
    divele.appendChild(addNav())
}

export default renderPage