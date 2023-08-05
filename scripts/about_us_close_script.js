function saveSourcePage(source){
    localStorage.setItem('sourcePage', source);
}

function handleCrossIconClick(){
    var sourcePage = localStorage.getItem('sourcePage');

    if(sourcePage === '1'){
        window.location.href = 'index.html';
    }
    else if(sourcePage === '2'){
        window.location.href = 'portfolio_page.html';
    }
    else{
        window.location.href = 'index.html';
    }
}

var crossIcon = document.getElementById('close-cross');
crossIcon.addEventListener('click', handleCrossIconClick);