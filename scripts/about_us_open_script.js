document.addEventListener("DOMContentLoaded", function(){
    document.body.style.overflow = "hiden";
    document.body.style.height = "100%";
    document.body.style.transform = "translateY(100%)";

    window.setTimeout(function(){
        document.body.style.transition = "transform 0.7s ease-out";
        document.body.style.transform = "translateY(0)";
        document.body.style.overflow = "auto";
    }, 100);
});