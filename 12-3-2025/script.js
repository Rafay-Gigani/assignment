document.addEventListener("DOMContentLoaded", loadTasks);
        
function loadTasks() {
    let tasks = JSON.parse(localStorage.getItem("tasks")) || [];
    const taskList = document.getElementById("taskList");
    taskList.innerHTML = "";
    tasks.forEach((task, index) => {
        let li = document.createElement("li");
        li.innerHTML = `${task} 
            <button class='edit' onclick='editTask(${index})'>Edit</button>
            <button class='delete' onclick='deleteTask(${index})'>X</button>`;
        taskList.appendChild(li);
    });
}

function addTask() {
    let taskInput = document.getElementById("task");
    let task = taskInput.value.trim();
    if (task) {
        let tasks = JSON.parse(localStorage.getItem("tasks")) || [];
        tasks.push(task);
        localStorage.setItem("tasks", JSON.stringify(tasks));
        taskInput.value = "";
        loadTasks();
    }
}

function deleteTask(index) {
    let tasks = JSON.parse(localStorage.getItem("tasks")) || [];
    tasks.splice(index, 1);
    localStorage.setItem("tasks", JSON.stringify(tasks));
    loadTasks();
}

function editTask(index) {
    let tasks = JSON.parse(localStorage.getItem("tasks")) || [];
    let newTask = prompt("Edit your task:", tasks[index]);
    if (newTask !== null && newTask.trim() !== "") {
        tasks[index] = newTask.trim();
        localStorage.setItem("tasks", JSON.stringify(tasks));
        loadTasks();
    }
}