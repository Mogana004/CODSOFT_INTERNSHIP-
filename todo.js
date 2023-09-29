const todoText = document.getElementById('todo-text');
const todoList = document.getElementById('todo-list');

function addTask() {
    if (todoText.value.trim() === '') {
        alert('Enter some todo task..');
    } else {
        const newList = createATodoList(todoText.value);
        todoText.value = '';
        todoList.appendChild(newList);
    }
}

function todoChecked(e) {
    console.log(e.classList.toggle('done'));
}

function createATodoList(text) {
    const list = document.createElement('li');
    const span = document.createElement('span');
    const textNode = document.createTextNode(text);
    const closeSpan = document.createElement('span');
    closeSpan.classList.add('close');
    closeSpan.innerHTML = '&times;';
    span.appendChild(textNode);
    list.appendChild(span);
    list.appendChild(closeSpan);
    span.addEventListener('click', (e) => {
        todoChecked(e.target);
    });
    closeSpan.addEventListener('click', (e) => {
        const li = e.target.parentElement;
        li.parentElement.removeChild(li)
    });
    return list;
}
