const burgerMenuMobile = document.querySelector('.hamburger-mobile-img');
const sideMenuMobile = document.querySelector('.sidemenu-mobile');

burgerMenuMobile.addEventListener('click', () =>{
    sideMenuMobile.classList.toggle('show-menu-mobile');
});

function closeMenuMobile(){
    sideMenuMobile.classList.remove('show-menu-mobile');
}

document.addEventListener('click', (event) => {
    if(!sideMenuMobile.contains(event.target) && !burgerMenuMobile.contains(event.target)){
        closeMenuMobile();
    }
});

window.addEventListener('resize', (event) => {
    if(window.innerWidth > 755){
        closeMenuMobile();
    }
});

// window.addEventListener('scroll', (event) => {
//     closeMenuMobile();
// });
