const toDoBtn = document.querySelector('.todo-btn');
const toDoInput = document.querySelector(".todo-input");
const toDoList = document.querySelector('.todo-list');
var tasks = [];

toDoBtn.addEventListener('click', addToDo);
function addToDo(e) {
    const inputValue = toDoInput.value;
    if(inputValue.trim()==''){
       return alert("You must write something!!")
    }
    tasks.push({
        task: inputValue,
        completed: false
    });
    updateTodoList(); 
}

function updateTodoList() {
    toDoList.innerHTML = "";
    tasks.forEach((task,index) => {
        const toDoDiv = document.createElement("div");
        toDoDiv.classList.add('todo')

        var listItem = document.createElement('li');
        listItem.innerText = task.task; 
        listItem.classList.add('todo-item');
        toDoDiv.appendChild(listItem);
        listItem.className=task.completed?'completed':""
        listItem.onclick=function(){
            toogleCompleted(task)
        }

        const checked = document.createElement('button');
        checked.innerHTML = '<i class="fas fa-check"></i>';
        checked.classList.add('check-btn');
        toDoDiv.appendChild(checked);
        checked.onclick=function(){
            toogleCompleted(task)
        }

        const deleted = document.createElement('button');
        deleted.innerHTML = '<i class="fas fa-trash"></i>';
        deleted.classList.add('delete-btn');
        toDoDiv.appendChild(deleted);

        toDoList.appendChild(toDoDiv);
        deleted.addEventListener('click',() => deleteToDo(index));

        function deleteToDo(index) {
            tasks.splice(index, 1);
            updateTodoList();
        }
    
    });
}

function toogleCompleted(task) {
    task.completed=!task.completed
    updateTodoList()
    // Implement your delete functionality here
}
