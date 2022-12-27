function addAbout() {
    const mainAbout = document.createElement('div')
    mainAbout.classList.add('mainAbout')

    const phone = document.createElement('div')
    phone.classList.add('phone')
    const phonelogo = document.createElement('img')
    phonelogo.src = 'images/phone.png'
    phonelogo.classList.add('phonelogo')
    const phonenum = document.createElement('p')
    phonenum.textContent = '+91 79797 87022'

    const addr = document.createElement('div')
    const map  = document.createElement('iframe')
    map.src = `https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3051.8777428124627!2d-105.17094872410904!3d40.10043867149223!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x876bf089516381cd%3A0x152e9fc059274847!2sNiwot%20Tavern!5e0!3m2!1sen!2sin!4v1672154548422!5m2!1sen!2sin" width="800" height="750" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade`

    const physicaladdr = document.createElement('p')
    physicaladdr.textContent = `7960 Niwot Rd Unit D12, Niwot, CO 80503, United States`

    const addrlogo = document.createElement('img')
    addrlogo.src = 'images/address.png'
    addrlogo.classList.add('addrlogo')



    phone.appendChild(phonelogo)
    phone.appendChild(phonenum)
    mainAbout.appendChild(phone)
    addr.appendChild(addrlogo)
    addr.appendChild(physicaladdr)
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