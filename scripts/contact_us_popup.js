const openBtns = document.querySelectorAll(".open-contact");
const overlay = document.getElementById("popup-overlay");
const popup = document.getElementById("popup");

openBtns.forEach((openBtn) =>{
    openBtn.addEventListener("click", () => {
        overlay.classList.add("active");
        popup.classList.toggle("opened");
        closeMenu();
        closeMenuMobile();
    });
});

overlay.addEventListener("click", (event) => {
    if (event.target === overlay) {
        popup.classList.remove("opened");
        setTimeout(function(){
            overlay.classList.remove("active");
        }, 400);
    }
});