const todos = [
    {
        text: 'Learn Javascript',
        completed: false
    },
    {
        text: 'Drive Car',
        completed: true
    },
    {
        text: 'Go to sleep',
        completed: false
    },
    {
        text: 'Go to doctor',
        completed: false
    }
]
//Remove all p tags that have Learn in them.

// const p = document.querySelectorAll('p')
// console.log(p)

// p.forEach(x => {
//     if (x.textContent.includes('Learn')) {
//         x.remove()
//     }
// })


//You have two todos left (p element)
//Add p for each todo above (Use text value)

const newParas = document.createElement('h2')

const filtered_todos = todos.filter(x => x.completed === false)
const filtered_todos_length = filtered_todos.length
const message = `You have ${filtered_todos_length} todos left`
newParas.textContent = message
document.querySelector('body').appendChild(newParas)
// filtered_todos.forEach((x) => {
//     const p = document.createElement('p')
//     p.textContent = x.text
//     document.querySelector('body').appendChild(p)
// })

const filterTodosCriteria = {
    text: ''
}

const renderedTodos = (todo, filterTodosCriteria) => {
    const filTodos = todo.filter((el) => el.text.toLowerCase().includes(filterTodosCriteria.text.toLowerCase()))
    console.log(filTodos)

    document.querySelector('#todos').innerHTML = ''

    filTodos.forEach((el) => {
        const p = document.createElement('p')
        p.textContent = el.text
        document.querySelector('#todos').appendChild(p)
    })

}

renderedTodos(todos, filterTodosCriteria)

document.querySelector('#create-todo').addEventListener('click', (e) => e.target.textContent = 'Todo Created')

document.querySelector('#search-text').addEventListener('input', (e) => {
    filterTodosCriteria.text = e.target.value
    renderedTodos(todos, filterTodosCriteria)
})
