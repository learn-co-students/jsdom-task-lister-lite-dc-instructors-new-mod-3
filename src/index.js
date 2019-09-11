document.addEventListener("DOMContentLoaded", () => {
  console.log("loaded")
});

let newTaskBtn = document.getElementById("new-task-btn")
let taskList = document.getElementById("list")
let newTaskForm = document.getElementById("create-task-form")

newTaskBtn.addEventListener('click', handleNewTaskBtn)

function handleNewTaskBtn(e){
  e.preventDefault()
  console.log('creating new task')
  addTask()
  newTaskForm.reset()
}

function addTask(){
  let text = document.getElementById('new-task-description').value
  let taskItem = document.createElement('li')
  taskItem.innerText = text

  let delBtn = document.createElement('button')
  delBtn.innerText = "X"
  delBtn.addEventListener('click', handleDelTask)

  taskItem.appendChild(delBtn)
  taskList.appendChild(taskItem)
}

function handleDelTask(e){
  e.preventDefault
  debugger
  taskList.removeChild(e.target.parentElement)
}
