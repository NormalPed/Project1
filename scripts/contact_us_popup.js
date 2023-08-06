const openBtns = document.querySelectorAll(".open-contact");
const overlay = document.getElementById("popup-overlay");
const popup = document.getElementById("popup");

function disableScroll(){
    const x = window.scrollX;
    const y = window.scrollY;
    window.onscroll = function (){
        window.scrollTo(x,y);
    };
}
function enableScroll(){
    window.onscroll = null;
}


openBtns.forEach((openBtn) =>{
    openBtn.addEventListener("click", () => {
        overlay.classList.add("active");
        popup.classList.toggle("opened");
        closeMenu();
        closeMenuMobile();
        disableScroll();
    });
});

overlay.addEventListener("click", (event) => {
    if (event.target === overlay) {
        enableScroll();
        popup.classList.remove("opened");
        setTimeout(function(){
            overlay.classList.remove("active");
        }, 400);
    }
});