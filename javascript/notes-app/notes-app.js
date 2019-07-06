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

// Testing dropdown functionality

document.querySelector('#filter-by').addEventListener('change', (el) => {
    console.log(el.target.value)
})

// Create and Update Data in localstorage (CrUd)
//localStorage.setItem('location', 'Mumbai')

// Read data from local storage (cRud)

//console.log(localStorage.getItem('location'))

// Delete data from local storage
//localStorage.removeItem('location')

// Clear the data from local storage
//localStorage.clear()


// Store object local storage

// const user = {
//     name: 'Prathamesh',
//     age: 32,
//     gender: 'male',
//     nationality: 'Indian',
//     isMarried: true
// }

// const userJSON = JSON.stringify(user)

// console.log(userJSON)
// localStorage.setItem('user',userJSON)


const userJSON = localStorage.getItem('user')
const user = JSON.parse(userJSON)
console.log(user.name)
