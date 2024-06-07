//////////1-varibale
const addNewTaskBtn = document.getElementById("task-button");
const taskContainer = document.getElementById("list-container");
const inputField = document.getElementById("task");
/////////2-eventListener
addNewTaskBtn.addEventListener("click", function() {
     //creat<li> tag
  const newTask = document.createElement("li");
  newTask.innerText = inputField.value;
  //access to the value
  taskContainer.appendChild(newTask);
  inputField.value = "";

///////////3-function

  newTask.addEventListener("click", function() {
    newTask.style.textDecoration = "line-through";
  })
  //remove <li> tag
  newTask.addEventListener("dblclick", function() {
    taskContainer.removeChild(newTask);
})
})
//adding remove btn to the li
newTask.addEventListener('dblclick',function(){
    TaskContainer.removeChild(newTask)
})
