// selectos

const todoInput = document.querySelector(".todo-input");
const todoButton = document.querySelector(".todo-button");
const todoList = document.querySelector(".todo-list");

//event listening

todoButton.addEventListener("click", addTodo);

//functions
function addTodo(e) {
  e.preventDefault();

  if (todoInput.value) {
    const newTodo = `
    <div class="todo">
    <li class="todo-item">${todoInput.value}</li>
    <button class="complete-btn"><i class="fas fa-check"></i></button>
    <button class="trash-btn"><i class="fas fa-trash"></i></button>
    </div>`;

    todoList.innerHTML += newTodo;
    todoInput.value = "";
  }
}
