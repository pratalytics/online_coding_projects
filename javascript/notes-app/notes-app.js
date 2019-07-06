const notes = [
    {
        title: 'My next trip',
        body: 'I would like to go to spain'
    },
    {
        title: 'Habbits to work on',
        body: 'Skipping'
    },
    {
        title: 'Get up early everyday',
        body: 'Get up at 5 am'
    },
    {
        title: 'Learn D3.js',
        body: 'Learn how to create beautiful data viz'
    },
    {
        title: 'Learn Python',
        body: 'Learn how to use REST APIs'
    }
]

const filters = {
    searchText: ''
}

const renderNotes = (note, filters) => {
    const filteredNotes = note.filter((el) => el.title.toLowerCase().includes(filters.searchText.toLowerCase()))
    console.log(filteredNotes)

    document.querySelector('#notes').innerHTML = ''
    filteredNotes.forEach((el) => {
        const p = document.createElement('p')
        p.textContent = el.title
        document.querySelector('#notes').appendChild(p)
    })
}

renderNotes(notes, filters)


document.querySelector('#create-note').addEventListener('click', (e) => e.target.textContent = 'The buttone was clicked')



document.querySelector('#search-text').addEventListener('input', (e) => {
    filters.searchText = e.target.value
    renderNotes(notes, filters) 
})

//Prevents default behaviour of the form
document.querySelector('#name-form').addEventListener('submit', (el) => {
    el.preventDefault()
    console.log(el.target.elements.firstName.value)
    el.target.elements.firstName.value = ''
})
