const form = document.getElementById("todoForm");
const taskInput = document.getElementById("taskInput");
const dateInput = document.getElementById("dateInput");
const taskList = document.getElementById("taskList");
const filterBtn = document.getElementById("filterBtn");
const deleteAllBtn = document.getElementById("deleteAllBtn");

let tasks = [];

form.addEventListener("submit", function(e) {
    e.preventDefault();

    if (taskInput.value.trim() === "" || dateInput.value === "") {
        alert("Please fill all fields!");
        return;
    }

    const newTask = {
        text: taskInput.value,
        date: dateInput.value,
        completed: false
    };

    tasks.push(newTask);
    renderTasks();

    taskInput.value = "";
    dateInput.value = "";
});

function renderTasks(filtered = tasks) {
    taskList.innerHTML = "";

    if (filtered.length === 0) {
        taskList.innerHTML = "<p class='empty'>No task found</p>";
        return;
    }

    filtered.forEach((task, index) => {
        const div = document.createElement("div");
        div.classList.add("task-item");
        if (task.completed) div.classList.add("completed");

        div.innerHTML = `
            <div>
                <span>${task.text}</span><br>
                <small>${task.date}</small>
            </div>
            <div class="task-actions">
                <button onclick="toggleTask(${index})">✔</button>
                <button onclick="deleteTask(${index})">X</button>
            </div>
        `;

        taskList.appendChild(div);
    });
}

function toggleTask(index) {
    tasks[index].completed = !tasks[index].completed;
    renderTasks();
}

function deleteTask(index) {
    tasks.splice(index, 1);
    renderTasks();
}

filterBtn.addEventListener("click", function() {
    const pending = tasks.filter(task => !task.completed);
    renderTasks(pending);
});

deleteAllBtn.addEventListener("click", function() {
    tasks = [];
    renderTasks();
});
 
