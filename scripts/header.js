// Var for header and header height
let header = document.querySelector(".js-header"),
    headerH = document.querySelector(".js-header").clientHeight;

// On scroll header will take additional parametrs 'fixed'
document.onscroll = function () {
    let scroll = window.scrollY;   //var for scroll position

    if(scroll > headerH) {     //if scroll position bigger than header height
        header.classList.add('fixed');  //add additional parametrs
        document.body.style.paddingTop = headerH + 'px';   //fix page look
    } 
    else {    //else -> reverse algoritm
        header.classList.remove('fixed');
        document.body.removeAttribute('style');
    }
}
