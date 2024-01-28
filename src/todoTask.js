


const createTask = () => {  //Creating a Task object then creating a function to toggle completion and creating a function to add the task to an array
    class Task {
        createTodo(title, desc, notes, priority, status){
            this.title = title;
            this.desc = desc;
            this.notes = notes;
            this.priority = priority;
            this.status = status;
            
            this.info = function(){
                let info = this.title +", " +  this.desc +", " +  this.notes +", " +  this.status;
                return info;
            }   
        }
    }

    Task.prototype.statusButtonToggle = function() {
        this.status = !this.status;
    }
    
    function addTodoTask(){
        let title = document.getElementById("titleInput"); 
        let desc = document.getElementById("descInput"); 
        let notes = document.getElementById("notesInput");
        let priority = document.getElementById("priorityInput");
        let status = false;
        let todo = new Task(title.value, desc.value, notes.value, priority, status.value);
        todoTaskArr.push(todo);
        //DisplayTasks();
    }
    addTodoTask()
   //    var todoTaskArr = [];    trying to see if it works in the index.js as it would keep getting wiped here.
}

export default createTask;