
const todo_input = document.querySelector('#todo_input')
const todo_submit = document.querySelector('#todo_submit')
const todo_form = document.querySelector('#todo_form')
const todo_list = document.querySelector('#todo_list')
let todo_array = []
function set_localstorage() {
    localStorage.setItem('todo', JSON.stringify(todo_array))
}
function todo_create(todo_obj) {
    const todo_li = document.createElement('li')
    const todo_span = document.createElement('span')
    const todo_deletebox = document.createElement('button')
    todo_span.innerText = todo_obj.text
    todo_deletebox.innerText = 'X'
    todo_li.id = todo_obj.id
    todo_list.appendChild(todo_li)
    todo_li.appendChild(todo_span)
    todo_li.appendChild(todo_deletebox)
    function deletefunc(event) {
        const target_todo = event.target.parentElement
        todo_array = todo_array.filter((element) => element.id !== parseInt(target_todo.id))
        target_todo.remove()
        set_localstorage()
    }
    todo_deletebox.addEventListener('click', deletefunc)

}

function todo_pre(event) {
    event.preventDefault();
    const todo_obj = {
        'text': todo_input.value,
        'id': Date.now()
    }
    todo_input.value = "";
    todo_array.push(todo_obj)
    todo_create(todo_obj);
    set_localstorage()
}
todo_form.addEventListener('submit', todo_pre)
const getlocalstorage = localStorage.getItem('todo')
if (getlocalstorage !== null) {
    const parsetodo = JSON.parse(getlocalstorage)
    todo_array = parsetodo
    parsetodo.forEach(todo_create);

}