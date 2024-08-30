const addBtn = document.querySelector("#AddBtn");
const editModal = document.querySelector("#editModal");
const editInput = document.querySelector("#editInput");
const saveBtn = document.querySelector("#saveBtn");
const closeModal = document.querySelector(".close");
const filterSelect = document.querySelector(".filter-todo");
const toDoList = document.querySelector("#Add-to-do-list");

let currentTodoLi;

addBtn.addEventListener("click", () => {
  const inputValue = document.querySelector("#input");
  const todoValue = inputValue.value;

  if (todoValue.trim() === "") {
    alert("Please enter a task.");
    return;
  }

  const todoLi = document.createElement("li");
  todoLi.classList.add(
    "flex",
    "justify-between",
    "items-center",
    "p-2",
    "rounded-md"
  );

  const taskText = document.createElement("span");
  taskText.textContent = todoValue;
  taskText.classList.add("flex-grow", "mr-4");
  todoLi.appendChild(taskText);

  const btnContainer = document.createElement("div");
  btnContainer.classList.add("flex", "space-x-2");

  const editBtn = document.createElement("button");
  editBtn.classList.add(
    "bg-yellow-500",
    "text-white",
    "px-2",
    "py-1",
    "rounded-md",
    "hover:bg-yellow-600",
    "w-20"
  );
  editBtn.innerHTML = `<i class="fa-solid fa-pen-to-square"></i>`;

  const deleteBtn = document.createElement("button");
  deleteBtn.classList.add(
    "bg-red-500",
    "text-white",
    "px-2",
    "py-1",
    "rounded-md",
    "hover:bg-red-600",
    "w-20"
  );
  deleteBtn.innerHTML = `<i class="fa-solid fa-trash"></i>`;

  const completeBtn = document.createElement("button");
  completeBtn.classList.add(
    "bg-green-500",
    "text-white",
    "px-2",
    "py-1",
    "rounded-md",
    "hover:bg-green-600",
    "w-20"
  );
  completeBtn.innerHTML = '<i class="fa-solid fa-check"></i>';

  btnContainer.appendChild(editBtn);
  btnContainer.appendChild(deleteBtn);
  btnContainer.appendChild(completeBtn);

  todoLi.appendChild(btnContainer);
  toDoList.appendChild(todoLi);

  inputValue.value = "";

  deleteBtn.addEventListener("click", () => {
    todoLi.classList.add("animate-slide-out");
    setTimeout(() => {
      toDoList.removeChild(todoLi);
    }, 500);
  });

  editBtn.addEventListener("click", () => {
    editModal.classList.remove("hidden");
    editModal.classList.add("animate-slide-down");
    editInput.value = taskText.textContent;
    currentTodoLi = todoLi;
  });

  completeBtn.addEventListener("click", () => {
    todoLi.classList.toggle("completed");
    if (todoLi.classList.contains("completed")) {
      completeBtn.classList.replace("bg-green-500", "bg-blue-500");
    } else {
      completeBtn.classList.replace("bg-blue-500", "bg-green-500");
    }
  });
});

saveBtn.addEventListener("click", () => {
  if (currentTodoLi) {
    currentTodoLi.querySelector("span").textContent = editInput.value;
  }
  closeModalWithAnimation();
});

closeModal.addEventListener("click", () => {
  closeModalWithAnimation();
});

window.addEventListener("click", (event) => {
  if (event.target === editModal) {
    closeModalWithAnimation();
  }
});

function closeModalWithAnimation() {
  editModal.classList.add("animate-slide-up");
  setTimeout(() => {
    editModal.classList.add("hidden");
    editModal.classList.remove("animate-slide-up");
  }, 500);
}

filterSelect.addEventListener("change", (event) => {
  const filterValue = event.target.value;
  const todos = toDoList.querySelectorAll("li");

  todos.forEach((todo) => {
    const isCompleted = todo.classList.contains("completed");

    switch (filterValue) {
      case "completed":
        todo.style.display = isCompleted ? "flex" : "none";
        break;
      case "un-completed":
        todo.style.display = !isCompleted ? "flex" : "none";
        break;
      case "all":
      default:
        todo.style.display = "flex";
        break;
    }
  });
});

const darkModeToggle = document.getElementById("darkModeToggle");
const body = document.body;

// Check if dark mode is already enabled in localStorage
if (localStorage.getItem("darkMode") === "enabled") {
  body.classList.add("dark");
}

darkModeToggle.addEventListener("click", () => {
  body.classList.toggle("dark");

  if (body.classList.contains("dark")) {
    localStorage.setItem("darkMode", "enabled");
  } else {
    localStorage.setItem("darkMode", "disabled");
  }
});
