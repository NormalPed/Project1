let overlay = document.querySelector(".overlay");
let tongue = document.getElementById("overlay-tongue");

tongue.addEventListener('click', ()=>{
    overlay.classList.toggle('hiden');
    tongue.style.display = "none";
})