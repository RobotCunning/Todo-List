import createTask from "./todoTask";
import createTodoList from "./todoListBuilder";

const createPage = () => {
    const pageContent = document.getElementById('pageContent');
    
    //var header = document.createElement('div');
    //header.id = 'header';
    //header.className = 'header';
    //header.innerText = 'header';
    //pageContent.appendChild(header);

    var mainBody = document.createElement('div');
    mainBody.id = 'mainBody';
    mainBody.className = 'mainBody';
    mainBody.innerHTML = 
            `<form id=taskForm>
            <input type='text' placeholder='What is your project?' id='projectInput'> /br
            <input type='text' placeholder='Task Title' id='titleInput'> /br 
            <input type='text' placeholder='Notes?' id='notesInput'> /br
            <input type='radio' placeholder='Priority' id='priorityInput'>/br
            <button type='submit' id='taskButton'>click me</button> <button type='submit' id='createList' '>Create list</button>
            </form> `;


    
    pageContent.appendChild(mainBody);
    document.getElementById('taskButton').addEventListener('click', 
    function(event) {
   
        // Handle the form data
        event.preventDefault();
    });
    document.getElementById('createList').addEventListener('click', 
    function(event) {
   
        // Handle the form data
        event.preventDefault();
    });
    document.getElementById('taskButton').addEventListener('click', 
    function() {
        createTask();
        createTodoList();
    });
    
    var sideBar = document.createElement('div');
    sideBar.id = 'sideBar';
    sideBar.className = 'sideBar';
    sideBar.innerText = 'side bar';
    pageContent.appendChild(sideBar);


    var footer = document.createElement('div');
    footer.id ='footer';
    footer.className = 'footer';
    footer.innerHTML = `Created by <a href="https://github.com/RobotCunning"> Charlie</a>.`;
    mainBody.appendChild(footer);

   
}
export default createPage;