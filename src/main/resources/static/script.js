// انتخاب عناصر DOM
const taskForm = document.getElementById('task-form');
const taskList = document.getElementById('task-list');

// API Base URL
const API_URL = "http://localhost:1111/tasks"; // مطمئن شوید آدرس API صحیح است

// دریافت لیست وظایف از API
async function fetchTasks() {
    const response = await fetch(API_URL);
    const tasks = await response.json();
    renderTasks(tasks);
}

// افزودن وظیفه جدید به API
taskForm.addEventListener('submit', async (e) => {
    e.preventDefault();

    const newTask = {
        title: document.getElementById('title').value,
        description: document.getElementById('description').value,
        dueDate: document.getElementById('dueDate').value,
        completed: false
    };

    await fetch(API_URL, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(newTask)
    });

    taskForm.reset();
    fetchTasks();
});

// حذف وظیفه
async function deleteTask(id) {
    await fetch(`${API_URL}/${id}`, {
        method: 'DELETE'
    });
    fetchTasks();
}

// نمایش وظایف در HTML
function renderTasks(tasks) {
    taskList.innerHTML = '';

    tasks.forEach(task => {
        const li = document.createElement('li');
        li.innerHTML = `
            <div>
                <h3>${task.title}</h3>
                <p>${task.description}</p>
                <p><strong>Due:</strong> ${task.dueDate}</p>
            </div>
            <div class="task-actions">
                <button onclick="deleteTask(${task.id})">Delete</button>
            </div>
        `;
        taskList.appendChild(li);
    });
}

// بارگذاری اولیه وظایف
fetchTasks();
