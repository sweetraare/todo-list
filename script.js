// selectos

const todoInput = document.querySelector(".todo-input");
const todoButton = document.querySelector(".todo-button");
const todoList = document.querySelector(".todo-list");

//event listening

todoButton.addEventListener("click", addTodo);
todoList.addEventListener("click", checkOrDelete);

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

function checkOrDelete(e) {
  const itemClicked = e.target;
  console.log(itemClicked);

  if (itemClicked.classList.contains("trash-btn")) {
    const todo = itemClicked.parentElement;
    todo.classList.add("removed");
    todo.addEventListener("transitionend", () => todo.remove());
  }

  if (itemClicked.classList.contains("complete-btn")) {
    itemClicked.parentElement.classList.toggle("done");
  }
}
