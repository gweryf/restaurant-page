function addDescr() {
    const descr = document.createElement('div')
    descr.classList.add('descr')
    descr.innerText = `
    From the outside it looks inviting, cozy and beautiful. Logs and tree trunks make up most of the building's outer structure. It's difficult to see through the large, stained glass windows, but the laughter from within can be felt outside.

    As you enter our food court through the decorated, metal door, you're welcomed by overall happiness and the smile of a waitress.
    The bartender is swamped in work, but still manages to welcome you with a smile.
    `

    const descrimg = document.createElement('img')
    descrimg.classList.add('homeimg')
    descrimg.src = "../dist/descrfood.jpg"
    descrimg.alt = "Image of a food!"
    descr.appendChild(descrimg)

    const order = document.createElement('div')
    order.innerText = "Order online or visit us!"
    order.style.textAlign = 'center'
    order.style.background = '#404040'
    descr.appendChild(order)

    return descr
}

export default addDescr