const addBtn = document.querySelector("#AddBtn");

addBtn.addEventListener("click", () => {
  //   console.log("AddBtn clicked");
  const inputValue = document.querySelector("#input");

  const todoValue = inputValue.value;
  //   console.log(todoValue);
  const toDoList = document.querySelector("#Add-to-do-list");

  const todoLi = document.createElement("li");
  todoLi.textContent = todoValue;

  const editBtn = document.createElement("button");
  editBtn.textContent = `Edit`;

  const deleteBtn = document.createElement("button");
  deleteBtn.textContent = `Delete`;

  todoLi.appendChild(editBtn);
  todoLi.appendChild(deleteBtn);
  toDoList.appendChild(todoLi);
});
