import { todoTaskArr } from "./todoTask";

const createTodoList = () => { //need to find a way to make the list updateable when completing a task. potentially with the array like the library
    var mainBody = document.getElementById('mainBody')
    
    
    for(let i=0; i < todoTaskArr.length; i++){
    var taskCard = document.createElement('div');
    var currentTask = todoTaskArr[i]
    taskCard.id = "taskCard"+i
    taskCard.className = "taskCard"
    taskCard.innerHTML = `${currentTask.project} ${currentTask.title}` 
    mainBody.appendChild(taskCard)
    }
}
//document.getElementById('taskButton').addEventListener('click', createTodoList(todo))

export default createTodoList;