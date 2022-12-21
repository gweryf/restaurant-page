function addNav() {
    const navbar = document.createElement('nav')
    navbar.classList.add('navbar')
    
    const resrtname = document.createElement('div')
    resrtname.innerText = 'Food Court'

    const options = document.createElement('div')

    const home = document.createElement('button')
    home.innerText = 'Home'
    home.style.border = 'none'
    home.style.background = 'none'
    home.style.cursor  = 'pointer'
    const menu = document.createElement('button')
    menu.innerText = 'Menu'
    menu.style.border = 'none'
    menu.style.background = 'none'
    menu.style.cursor  = 'pointer'
    const about = document.createElement('button')
    about.innerText = 'About'
    about.style.border = 'none'
    about.style.background = 'none'
    about.style.cursor  = 'pointer'

    navbar.appendChild(resrtname)
    options.appendChild(home)
    options.appendChild(menu)
    options.appendChild(about)
    options.style.display = 'flex'
    options.style.gap = '20px'
    navbar.appendChild(options)
    navbar.style.display = 'flex'
    navbar.style.justifyContent = 'space-around'
    navbar.style.alignItems = 'center'
    navbar.style.padding = '20px'
    navbar.style.background = '#616160'
    return navbar
}

function addFooter() {
    const webfooter = document.createElement('footer')
    webfooter.classList.add('foot')
    webfooter.innerText = 'Copyright © 2022 Priyam Shrivastava'
    webfooter.style.textAlign = 'center'
    return webfooter
}

function renderPage() {
    const divele = document.getElementById('content')
    const body = document.querySelector('body')
    body.style.margin = '0'
    body.style.background = '#242424'
    body.style.color = 'white'
    divele.appendChild(addNav())
    body.append(addFooter())
}

export default renderPage