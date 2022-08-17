document.addEventListener("DOMContentLoaded", () => {
  addButton.addEventListener('click', event => {
    event.preventDefault()
  })
});


const addMessage = document.getElementById('new-task-description')         
const addButton = document.querySelector('input[type ="submit"]')          
const todo = document.getElementById('tasks')                              

const todoList = []     

addButton.addEventListener('click', function () {           
  if(!addMessage.value) return                      
  let newTodo = {
    todo: addMessage.value,
    checked: false,
  }
  todoList.push(newTodo)
  displayMessages()     
  addMessage.value = ''
})

function displayMessages() {   
  let displayMessage = ''                       
  todoList.forEach(function (item, i) {     
    displayMessage += `              
    <li>
      <input type='checkbox' id='item_${i}' ${item.checked ? 'checked' : ''}>
      <label for='item_${i}'> ${item.todo} </label>
    </li>
    `
    let priority = document.getElementById('priority')
    todo.innerHTML = displayMessage    
  })
}








