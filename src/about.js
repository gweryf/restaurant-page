function addAbout() {
    const mainAbout = document.createElement('div')
    mainAbout.classList.add('mainAbout')

    const addr = document.createElement('div')
    const map  = document.createElement('iframe')
    map.src = `https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d47437.52196046917!2d-105.20621040730944!3d40.103918950192714!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x876bf089516381cd%3A0x152e9fc059274847!2sNiwot%20Tavern!5e0!3m2!1sen!2sin!4v1671949393348!5m2!1sen!2sin" width="400" height="300" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade`

    const physicaladdr = document.createElement('p')
    physicaladdr.textContent = `7960 Niwot Rd Unit D12, Niwot, CO 80503, United States`

    mainAbout.appendChild(physicaladdr)
    addr.appendChild(map)
    mainAbout.appendChild(addr)

    return mainAbout
}

function renderAbout() {
    const divele = document.querySelector('.descr')
    divele.textContent = ""

    divele.appendChild(addAbout())
}

export default renderAbout