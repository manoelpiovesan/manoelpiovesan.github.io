const INITIAL_PAGE = 0;

function changeFoldersView(id){
    let pageBodys = document.getElementsByClassName('page-body');
    for(let i = 0; i < pageBodys.length; i++){
        pageBodys[i].style.display = 'none';
    }

    pageBodys[id].style.display = 'flex';

    let topicItems = document.getElementsByClassName('topic-item');
    for(let i = 0; i < topicItems.length; i++){ 
        topicItems[i].classList.remove('active');
    }
    
    topicItems[id].classList.add('active');

    document.querySelector("#page-header-title").textContent = topicItems[id].textContent;
    document.querySelector("#path-title").textContent = topicItems[id].textContent;
    lastPage = id;
}

changeFoldersView(INITIAL_PAGE);

function closeWindow(){
    document.querySelector("#window").style.display = 'none';
}

///







