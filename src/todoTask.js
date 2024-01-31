

var todoTaskArr = [];
class Task {
        createTodo(project, title, notes, priority, status){
            this.project = project;
            this.title = title;
            this.notes = notes;
            this.priority = priority;
            this.status = status;
            
            this.info = function(){
                let info = this.project +", " +  this.title +", " +  this.notes +", " +  this.status;
                return info;
            }   
        }
    }

    Task.prototype.statusButtonToggle = function() {
    this.status = !this.status;
   }
        
function createTask(){  //Creating a Task object then creating a function to toggle completion and creating a function to add the task to an array
    class Task {
        constructor(project, title, notes, priority, status){
            this.project = project;
            this.title = title;
            this.notes = notes;
            this.priority = priority;
            this.status = status;
            
            this.info = function(){
                let info = this.project +", " +  this.title +", " +  this.notes +", " +  this.status;
                return info;
            }   
        }
    }

    Task.prototype.statusButtonToggle = function() {
    this.status = !this.status;
   }
       
    function addTodoTask(){
        let project = document.querySelector("#projectInput"); 
        let title = document.querySelector("#titleInput"); 
        let notes = document.querySelector("#notesInput");
        let priority = document.querySelector("#priorityInput");
        let status = false;
        let todo = new Task(project.value, title.value, notes.value, priority.value, status.value);
        todoTaskArr.push(todo);
        console.log(project.value)
        //DisplayTasks();
    }
    addTodoTask();

    console.log(todoTaskArr);
   //    var todoTaskArr = [];    trying to see if it works in the index.js as it would keep getting wiped here.
}


//document.getElementById('taskButton').addEventListener('click', createTodoList(todo))
export var todoTaskArr;
export default createTask;