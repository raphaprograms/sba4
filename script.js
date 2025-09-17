let taskName = document.getElementById('taskName');
let taskCategory = document.getElementById('taskCategory');
let taskDueDate = document.getElementById('taskDueDate');
let taskStatus = document.getElementById('taskStatus');
let addTaskBtn = document.getElementById('addTaskButton');
let container = document.getElementById('ul');

const tasks = [];
let taskObj = {};

function createTaskObject(name, category, date, status) {
    taskObj = {
       task: name.value,
       category: category.value,
       dueDate: date.value,
       status: status.value
    }
    console.log(taskObj);

    tasks.push(taskObj);
    console.log(tasks);
}

const currentDate = new Date();

function checkDate(date) {
    const taskDate = new Date(date);
    if(taskDate < currentDate) {
        taskObj.status = 'Overdue';
    }
}

addTaskBtn.addEventListener('click', () => {
    
    // const taskObj = {
    //    task: taskName.value,
    //    category: taskCategory.value,
    //    dueDate: taskDueDate.value,
    //    status: taskStatus.value
    // }
    // console.log(taskObj);

    // tasks.push(taskObj);
    // console.log(tasks);
    createTaskObject(taskName, taskCategory, taskDueDate, taskStatus);
    checkDate(taskObj.dueDate);

    const taskDisplay = document.createElement('li');
    const taskNameDisplay = document.createElement('span');
    const taskCategoryDisplay = document.createElement('span');
    const taskDueDateDisplay = document.createElement('span');
    const taskStatusDisplay = document.createElement('select');

    taskDisplay.appendChild(taskNameDisplay);
    taskDisplay.appendChild(taskCategoryDisplay);
    taskDisplay.appendChild(taskDueDateDisplay);
    taskDisplay.appendChild(taskStatusDisplay);

    taskNameDisplay.textContent = taskObj.task;
    taskCategoryDisplay.textContent = taskObj.category;
    taskDueDateDisplay.textContent = taskObj.dueDate;

    const options = ['In Progress', 'Complete', 'Overdue'];

    options.forEach(optionText => {
        if (optionText !== taskObj.status) {
            const otherOption = document.createElement('option');
            otherOption.textContent = optionText;
            otherOption.value = optionText;
            taskStatusDisplay.appendChild(otherOption);
        }
    })

    console.log(taskObj);

    taskName.value = '';
    taskCategory.value = '';
    taskDueDate.value = '';

    container.appendChild(taskDisplay);

    

})

