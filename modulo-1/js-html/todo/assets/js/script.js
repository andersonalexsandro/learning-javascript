const inputTask = document.querySelector(".input-task");
const addButton = document.querySelector(".btn-add-task");
const tasks = document.querySelector(".tasks");

addButton.addEventListener('click', function (event){
    addTaskLogic();
});

inputTask.addEventListener('keypress', function(event){
    if(event.keyCode === 13) addTaskLogic();
});


document.addEventListener('click', function(event){
    const el = event.target;
    if (el.classList.contains('delete-button')) el.parentElement.remove();
})

function addTaskLogic(){
    const toDO = inputTask.value;
    if(!toDO) return;
    createTask(toDO);
}

function createTask(toDo){
    const li = document.createElement('li');
    li.innerText = toDo;
    createDeleteButton(li);
    tasks.appendChild(li);
    clearAndFocusInput();
    saveTasks();
}

function createDeleteButton(li){
    li.innerText += ' ';
    const deleteButton = document.createElement('button');
    deleteButton.innerText = 'Delete'
    deleteButton.setAttribute('class', 'delete-button')
    li.appendChild(deleteButton);
}

function clearAndFocusInput(){
    inputTask.value = '';
    inputTask.focus();
}

function saveTasks(){
    const liTasks = tasks.querySelectorAll('li');
    const taskList = []

    for (let task of liTasks){
        let taskText = task.innerText;
        taskText = taskText.replace('Delete', '').trim();
        taskList.push(taskText)
    }

    const tasksJSON = JSON.stringify(taskList)

}