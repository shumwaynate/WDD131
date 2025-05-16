let tasks = [];

function taskTemplate(task) {
  return `
    <li ${task.completed ? 'class="strike"' : ""}>
      <p>${task.detail}</p>
      <div>
        <span data-action="delete">❎</span>
        <span data-action="complete">✅</span>
      </div>
    </li>`;
}

function renderTasks(tasks) {
  const listElement = document.querySelector("#todoList");
  listElement.innerHTML = tasks.map(taskTemplate).join("");
}

function newTask() {
  const taskInput = document.querySelector("#todo");
  const taskDetail = taskInput.value.trim();
  
  if (taskDetail !== "") {
    tasks.push({ detail: taskDetail, completed: false });
    renderTasks(tasks);
    taskInput.value = ""; // Clear the input field
  }
}

function removeTask(taskElement) {
  const taskDetail = taskElement.querySelector('p').innerText;
  tasks = tasks.filter(task => task.detail !== taskDetail);
  renderTasks(tasks);
}

function completeTask(taskElement) {
  const taskDetail = taskElement.querySelector('p').innerText;
  const task = tasks.find(task => task.detail === taskDetail);
  
  if (task) {
    task.completed = !task.completed;
    renderTasks(tasks);
  }
}

function manageTasks(e) {
  const parent = e.target.closest("li");

  if (e.target.dataset.action === "delete") {
    removeTask(parent);
  } else if (e.target.dataset.action === "complete") {
    completeTask(parent);
  }
}

// Attach event listeners
document.querySelector("#submitTask").addEventListener("click", newTask);
document.querySelector("#todoList").addEventListener("click", manageTasks);
