


const createTask = () => {  //Creating a Task object then creating a function to toggle completion and creating a function to add the task to an array
    class Task {
        createTodo(task, notes, status){
            this.todo = task;
            this.status = status;
            this.notes = notes;
            this.info = function(){
                let info = this.todo +", " +  this.notes +", " +  this.status;
                return info;
            }   
        }
    }

    Task.prototype.statusButtonToggle = function() {
        this.status = !this.status;
    }
    var todoTask = [];
    function addTodoTask(){
        let task = document.getElementById("taskInput"); 
        let notes = document.getElementById("notesInput");
        let status = false;
        let todo = new Task(task.value, notes.value, status.value);
        todoTask.push(todo);
        //DisplayTasks();
    }
}