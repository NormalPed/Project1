const burgerMenu = document.querySelector('.hamburger-tablet');
const sideMenu = document.querySelector('.side-menu');

burgerMenu.addEventListener('click', () =>{
    sideMenu.classList.toggle('show-menu');
});

function closeMenu(){
    sideMenu.classList.remove('show-menu');
}

document.addEventListener('click', (event) => {
    if(!sideMenu.contains(event.target) && !burgerMenu.contains(event.target)){
        closeMenu();
    }
});

window.addEventListener('resize', (event) => {
    if(window.innerWidth < 755 || window.innerWidth > 900){
        closeMenu();
    }
});

window.addEventListener('scroll', (event) => {
    closeMenu();
});
