import createTodoList from './todoListBuilder';
import createPage from './todoListPage';
import createTask from './todoTask';

function loadPage(){
    createPage()
    //createTask()
}

export default loadPage;

