
let taskName = document.getElementById('taskName');
let taskCategory = document.getElementById('taskCategory');
let taskDueDate = document.getElementById('taskDueDate');
let taskStatus = document.getElementById('taskStatus');
let addTaskBtn = document.getElementById('addTaskButton');
let container = document.getElementById('ul');
let bigContainer = document.querySelector('main');

// empty array to store tasks
let tasks = [];

// Declare current date - did this oustside of event listener so it updates on page load
const currentDate = new Date();
currentDate.setHours(0, 0, 0, 0);

// check date by math
function checkDate(now, due) {
    const dueDate = new Date(due);
    dueDate.setHours(0, 0, 0, 0);

    console.log(dueDate);
    console.log(now);

    // get difference in milliseconds
    const difference = dueDate - now
    console.log(difference);
    
    if(difference < 0) {
        taskStatus.status = 'Overdue';
        return 'Overdue';
    } else {
        return taskStatus.value;
    }
}



addTaskBtn.addEventListener('click', () => {

    const taskObj = {
       task: taskName.value,
       category: taskCategory.value,
       dueDate: taskDueDate.value,
       status: taskStatus.value
    }
    console.log(taskObj);
    
    taskObj.status = checkDate(currentDate, taskObj.dueDate);


    tasks.push(taskObj);
    console.log(tasks);

    const taskDisplay = document.createElement('li');
    const taskNameDisplay = document.createElement('span');
    const taskCategoryDisplay = document.createElement('span');
    const taskDueDateDisplay = document.createElement('span');
    const taskStatusDisplay = document.createElement('select');

    taskNameDisplay.textContent = ` ${taskObj.task} `;
    taskCategoryDisplay.textContent = ` ${taskObj.category} `;
    taskDueDateDisplay.textContent = ` ${taskObj.dueDate} `;

    const options = ['In Progress', 'Complete', 'Overdue'];
    
    options.forEach(optionText => {
            const option = document.createElement('option');
            option.textContent = optionText;
            option.value = optionText;
            taskStatusDisplay.appendChild(option);
    });

    taskStatusDisplay.value = taskObj.status;

    taskStatusDisplay.addEventListener('change', (event) => {
            const changeStatus = event.target.value;
            taskObj.status = changeStatus;
            console.log(`Updated status for ${taskObj.task} to: ${changeStatus}`);
            console.log(taskObj);
    });

    taskDisplay.appendChild(taskNameDisplay);
    taskDisplay.appendChild(taskCategoryDisplay);
    taskDisplay.appendChild(taskDueDateDisplay);
    taskDisplay.appendChild(taskStatusDisplay);



    console.log(taskObj);

    taskName.value = '';
    taskCategory.value = '';
    taskDueDate.value = '';

    container.appendChild(taskDisplay);
    
    console.log(tasks);
});

// filter section


function filterByCategory(category) {
    return tasks.filter(taskObj => taskObj.category === category);
}

function filterByStatus(status) {
    return tasks.filter(taskObj => taskObj.status === status);
}

// this could work logically but how it fits into the current program, i don't know yet
// function filterByBoth(category, status) {
//     return tasks.filter(taskObj => taskObj.category === category && taskObj.status === status);
// }


// renders filter input and select
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
    
// renders filter select options
    filterOptions.forEach(filterOptionText => {
            const option = document.createElement('option');
            option.textContent = filterOptionText;
            option.value = filterOptionText;

        filterOption.appendChild(option);
    });

// try to set the display none of tasks that get filtered out
filterButton.addEventListener('click', () => {

    let selection = filterOption.value;
    console.log(selection);
    let filterInputValue = filterInput.value;
    console.log(filterInputValue);
    let filteredList = tasks.filter(task => 
        task.category === `${selection}` || task.status ===`${filterInputValue}`);
    console.log(filteredList);

})

function toggleVisibility(){
    
}
// try this for showing the filter list
// const content = document.getElementById('content');
// const replaceButton = document.getElementById('replace-btn');

// replaceButton.addEventListener('click', () => {
// const newContent = document.createElement('div');
// newContent.textContent = 'This is the new content!';
// content.replaceWith(newContent);
// });


bigContainer.appendChild(filterDisplay);


