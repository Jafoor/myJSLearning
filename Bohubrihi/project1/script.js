// Default UI element
let form = document.querySelector("#task_form");
let taskList = document.querySelector('ul');
let clearBtn = document.querySelector("#clear_task_btn");
let filter = document.querySelector("#task_filter");
let taskInput = document.querySelector("#new_task");

// Define event listener
form.addEventListener('submit', addTask);
taskList.addEventListener('click', removeTask);
clearBtn.addEventListener('click', removeAll);
filter.addEventListener('keyup', filterTask);
document.addEventListener('DOMContentLoaded', getTasks);
// Add Task
function addTask(e) {
    
    if(taskInput.value === ''){
        alert("You didn't add task. Add task before.")
    } else{
        let li = document.createElement('li');
        li.appendChild(document.createTextNode(taskInput.value + ' '));

        let link = document.createElement('a');
        link.setAttribute('href', '#');
        link.innerHTML = 'X';
        li.appendChild(link);
        taskList.appendChild(li);
        storeTaskInLocalStorage(taskInput.value);
        taskInput.value = '';
    }
    

    e.preventDefault();
}

// Remove Task
function removeTask(e) {
    //console.log(e.target);
    if(e.target.hasAttribute('href')){
        if(confirm("Are you sure to delete it?")){
            let ele = e.target.parentElement;
            console.log(ele);
            removeFromLocalStorage(ele);
            ele.remove();

            

        }
    }
}

// Remove All
function removeAll(e) {

    taskList.innerHTML = '';

    //Faster
    while(taskList.firstChild){
        //taskList.firstChild.remove();
        taskList.removeChild(taskList.firstChild);
    }
    removeALLFromLocalStorage();
}

// Filter task
function filterTask(e) {
    let text = e.target.value.toLowerCase();
    document.querySelectorAll('li').forEach(task => {
        //console.log(task);
        let item = task.firstChild.textContent.toLowerCase();
        if(item.indexOf(text) != -1){
            task.style.display = 'block';
        } else{
            task.style.display = 'none';
        }
        
    });
}

// Store in Local Storage
function storeTaskInLocalStorage(task) {
    let tasks;
    if( localStorage.getItem('tasks') === null ){
        console.log("sfg");
        tasks = [];
    } else{
        tasks = JSON.parse(localStorage.getItem('tasks'));
    }
    //console.log(task);
    //console.log(tasks);
    tasks.push(task);
    localStorage.setItem('tasks', JSON.stringify(tasks));
}

function getTasks() {
     
    let tasks;
    if( localStorage.getItem('tasks') === null ){
        console.log("sfg");
        tasks = [];
    } else{
        tasks = JSON.parse(localStorage.getItem('tasks'));
    }

    tasks.forEach(task => {
        let li = document.createElement('li');
        li.appendChild(document.createTextNode(task + ' '));

        let link = document.createElement('a');
        link.setAttribute('href', '#');
        link.innerHTML = 'X';
        li.appendChild(link);
        taskList.appendChild(li);
    })

};

function removeFromLocalStorage(task){
    let tasks;
    if(localStorage.getItem('tasks') === null) {
        tasks = [];
    } else {
        tasks = JSON.parse(localStorage.getItem('tasks'));
    }

    let li = task;
    li.removeChild(li.lastChild);
    tasks.forEach( (taskItem, index) => {
        console.log(taskItem);
        if(li.textContent.trim() === taskItem.trim()){
            tasks.splice(index, 1);
        }
    });

    localStorage.setItem('tasks', JSON.stringify(tasks));    
};

function removeALLFromLocalStorage(){
    //tasks = [];
    //localStorage.setItem('tasks', JSON.stringify(tasks)); 

    //OR
    localStorage.clear();
}
