function addTask() {
    var taskInput = document.getElementById('taskInput');
    var taskList = document.getElementById('taskList');

    if (taskInput.value !== '') {
        var newTask = document.createElement('li');
        newTask.innerHTML = `<input type="checkbox" onchange="toggleTaskCompletion(this)">
                           <span>${taskInput.value}</span>
                           <button class="update-btn" onclick="updateTask(this)">Update</button>
                           <button onclick="removeTask(this)">Remove</button>`;
        taskList.appendChild(newTask);
        taskInput.value = '';
    }
}

function updateTask(button) {
    var newTaskDescription = prompt("Update the task:", button.previousSibling.previousSibling.textContent);

    if (newTaskDescription !== null) {
        button.previousSibling.previousSibling.textContent = newTaskDescription;
    }
}

function removeTask(button) {
    var taskList = document.getElementById('taskList');
    var listItem = button.parentNode;
    taskList.removeChild(listItem);
}

function toggleTaskCompletion(checkbox) {
    var taskText = checkbox.nextSibling; // The <span> containing the task text
    if (checkbox.checked) {
        taskText.style.textDecoration = 'line-through';
    } else {
        taskText.style.textDecoration = 'none';
    }
}
