// take burger icon and side menu in const
const burgerMenu = document.querySelector('.hamburger-tablet');
const sideMenu = document.querySelector('.side-menu');

//if clicked on burger menu icon
burgerMenu.addEventListener('click', () =>{
    sideMenu.classList.toggle('show-menu');  //show side menu
});

function closeMenu(){  //close menu function
    sideMenu.classList.remove('show-menu');
}

document.addEventListener('click', (event) => {  //if user clicked outside of side menu it will close
    if(!sideMenu.contains(event.target) && !burgerMenu.contains(event.target)){
        closeMenu();
    }
});

window.addEventListener('resize', (event) => {   //if screen size smaller or bigger than tablet side menu will close
    if(window.innerWidth < 755 || window.innerWidth > 900){
        closeMenu();
    }
});

window.addEventListener('scroll', (event) => {   //if user scroll the page side menu will close
    closeMenu();
});
