let taskInput = document.getElementById("task-input");
let addButton = document.getElementById("add-button");
let taskList = [];
addButton.addEventListener("click", addTask);

function addTask() {
  let task = {
    id: randomIDGenerate(),
    taskContent: taskInput.value,
    isComplete: false,
  };
  taskList.push(task);
  console.log(taskList);
  render();
}

function render() {
  let resultHTML = "";
  for (let i = 0; i < taskList.length; i++) {
    if (taskList[i].isComplete == true) {
      resultHTML += `<div class="task">
        <div class="task-done">${taskList[i].taskContent}</div>
        <div>
          <button onclick="toggleComplete('${taskList[i].id}')">Check</button>
          <button onclick="deleteTask('${taskList[i].id}')">Delete</button>
        </div>
      </div>`;
    } else {
      resultHTML += `<div class="task">
        <div>${taskList[i].taskContent}</div>
        <div>
          <button onclick="toggleComplete('${taskList[i].id}')">Check</button>
          <button onclick="deleteTask('${taskList[i].id}')">Delete</button>
        </div>
      </div>`;
    }
  }
  document.getElementById("task-board").innerHTML = resultHTML;
}

function toggleComplete(id) {
  for (let i = 0; i < taskList.length; i++) {
    if (taskList[i].id == id) {
      taskList[i].isComplete = !taskList[i].isComplete;
      break;
    }
  }
  render();
  console.log(taskList);
}

function randomIDGenerate() {
  return "_" + Math.random().toString(36).substr(2, 9);
}

function deleteTask(id) {
  for (let i = 0; i < taskList.length; i++) {
    if (taskList[i].id == id) {
      taskList.splice(i, 1);
      break;
    }
  }
  render();
}
