let taskName = document.getElementById('taskName');
let taskCategory = document.getElementById('taskCategory');
let taskDueDate = document.getElementById('taskDueDate');
let taskStatus = document.getElementById('taskStatus');
let addTaskBtn = document.getElementById('addTaskButton');
let container = document.getElementById('ul');
let bigContainer = document.querySelector('main');

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
            const option = document.createElement('option');
            option.textContent = optionText;
            option.value = optionText;
        if (optionText === taskObj.status) {
            option.selected = true;
        }

        taskStatusDisplay.appendChild(option);
    });


    console.log(taskObj);

    taskName.value = '';
    taskCategory.value = '';
    taskDueDate.value = '';

    container.appendChild(taskDisplay);
    
    console.log(tasks);
});


const filterDisplay = document.createElement('div');
const filterOption = document.createElement('select');
const filterInput = document.createElement('input');
filterInput.type = 'text';
const currentFilter = document.createElement('span');
currentFilter.textContent = filterInput.value;
const filterButton = document.createElement('button');
filterButton.textContent = 'Filter';


filterDisplay.appendChild(filterOption);
filterDisplay.appendChild(filterInput);
filterDisplay.appendChild(currentFilter);
filterDisplay.appendChild(filterButton);

const filterOptions = ['Category', 'Status'];
    
    filterOptions.forEach(filterOptionText => {
            const option = document.createElement('option');
            option.textContent = filterOptionText;
            option.value = filterOptionText;

        filterOption.appendChild(option);
    });


filterButton.addEventListener('click', () => {
    let selection = filterOption.value;
    console.log(selection);
    let filterInputValue = filterInput.value;
    console.log(filterInputValue);
    let filteredList = tasks.filter(task => 
        task.category === `${selection}` || task.status ===`${filterInputValue}`);
    console.log(filteredList);
    

})


bigContainer.appendChild(filterDisplay);


