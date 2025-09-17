let taskName = document.getElementById('taskName');
let taskCategory = document.getElementById('taskCategory');
let taskDueDate = document.getElementById('taskDueDate');
let taskStatus = document.getElementById('taskStatus');
let addTaskBtn = document.getElementById('addTaskButton');

const tasks = [];

addTaskBtn.addEventListener('click', () => {
    
    const taskObj = {
       task: taskName.value,
       category: taskCategory.value,
       dueDate: taskDueDate.value,
       status: taskStatus.value
    }
    console.log(taskObj);

    tasks.push(taskObj);
    console.log(tasks);
})