function addMenu() {
    const actualmenu = document.createElement('div')
    actualmenu.classList.add('actualmenu')

    actualmenu.appendChild(addMenuItems(
        "blawmanger",
        120,
        "a recipe of rice and minced chicken"
    ))

    actualmenu.appendChild(addMenuItems(
        "bragot",
        300,
        "medieval ale made with honey and spices"
    ))

    actualmenu.appendChild(addMenuItems(
        "pandemainz",
        200,
        "a high quality bread made from wheat with the flour sifted 2 or 3 times"
    ))

    actualmenu.appendChild(addMenuItems(
        "pottage",
        40,
        "a type of soup or stew"
    ))

    return actualmenu
}

function addMenuItems(name,price,description) {
    const menufood = document.createElement('div')
    menufood.classList.add('menuorg')

    const foodname = document.createElement('h2')
    foodname.classList.add('foodname')
    foodname.innerText = `${name}`

    const foodprice = document.createElement('div')
    foodprice.classList.add('foodprice')
    foodprice.innerText = `${price}`

    const fooddescrp = document.createElement('div')
    fooddescrp.classList.add('fooddescrp')
    fooddescrp.innerText = `${description}`

    const foodimg = document.createElement('img')
    foodimg.classList.add('foodimg')
    foodimg.src = `../dist/images/menu/${name}.png`

    menufood.appendChild(foodimg)
    menufood.appendChild(foodname)
    menufood.appendChild(fooddescrp)
    menufood.appendChild(foodprice)

    return menufood
}

function renderMenu() {
    const menus = document.querySelector('.descr')
    menus.textContent = "";
    menus.appendChild(addMenu())
}

export default renderMenu