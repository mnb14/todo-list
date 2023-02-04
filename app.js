let addTaskBtn = document.getElementById("task-btn");
let taskInput = document.getElementById("input-task");
let taskList = document.getElementById("task-list");

addTaskBtn.addEventListener("click", function () {
  let task = taskInput.value;
  let taskItem = document.createElement("li");
  taskItem.textContent = task;
  const removeBtn = document.createElement("button");
  removeBtn.textContent = "Remove";
  removeBtn.addEventListener("click", function () {
    taskList.removeChild(taskItem);
  });

  taskItem.appendChild(removeBtn);
  taskList.append(taskItem);
  taskInput.value = "";
});
