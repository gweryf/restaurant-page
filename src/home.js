function addDescr() {
    const descr = document.createElement('div')
    descr.classList.add('descr')
    descr.innerText = `
    From the outside it looks inviting, cozy and beautiful. Logs and tree trunks make up most of the building's outer structure. It's difficult to see through the large, stained glass windows, but the laughter from within can be felt outside.

    As you enter our food court through the decorated, metal door, you're welcomed by overall happiness and the smile of a waitress.
    The bartender is swamped in work, but still manages to welcome you with a smile.
    
    You did hear rumors about this tavern, supposedly it's famous for something, but you can't remember what for. Though judging by the music and how many people are dancing, it must be the live band who just started playing. You manage to find a seat and prepare for what will undoubtedbly be a great evening.
    `
    return descr
}

export default addDescr