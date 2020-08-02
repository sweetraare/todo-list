// selectos

const todoInput = document.querySelector(".todo-input");
const todoButton = document.querySelector(".todo-button");
const todoList = document.querySelector(".todo-list");
const todoSelect = document.querySelector("select");

//event listening

todoButton.addEventListener("click", addTodo);
todoList.addEventListener("click", checkOrDelete);
todoSelect.addEventListener("change", filterTodos);

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

  if (itemClicked.classList.contains("trash-btn")) {
    const todo = itemClicked.parentElement;
    todo.classList.add("removed");
    todo.addEventListener("transitionend", () => todo.remove());
  }

  if (itemClicked.classList.contains("complete-btn")) {
    itemClicked.parentElement.classList.toggle("done");
  }
}

function filterTodos(e) {
  const filterValue = e.target.value;

  const todos = todoList.querySelectorAll(".todo");

  todos.forEach((todo) => {
    switch (filterValue) {
      case "all":
        todo.style.display = "flex";
        break;

      case "completed":
        if (todo.classList.contains("done")) {
          todo.style.display = "flex";
        } else {
          todo.style.display = "none";
        }
        break;

      case "uncompleted":
        if (!todo.classList.contains("done")) {
          todo.style.display = "flex";
        } else {
          todo.style.display = "none";
        }
        break;

      default:
        break;
    }
  });
}

//todo: Add localstorage
