


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
    mainBody.innerText = 'main body';
    pageContent.appendChild(mainBody);

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