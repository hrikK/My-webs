function arrow1MouseOver() {
    let ddMenu1 = document.querySelector(".dd-menu1");
    ddMenu1.classList.add("arrow-hovered");
}
function arrow1MouseOut() {
    let ddMenu1 = document.querySelector(".dd-menu1");
    ddMenu1.classList.remove("arrow-hovered");
}
function arrow2MouseOver() {
    let ddMenu2 = document.querySelector(".dd-menu2");
    ddMenu2.classList.add("arrow-hovered");
}
function arrow2MouseOut() {
    let ddMenu2 = document.querySelector(".dd-menu2");
    ddMenu2.classList.remove("arrow-hovered");
}
function arrow3MouseOver() {
    let ddMenu3 = document.querySelector(".dd-menu3");
    ddMenu3.classList.add("arrow-hovered");
}
function arrow3MouseOut() {
    let ddMenu3 = document.querySelector(".dd-menu3");
    ddMenu3.classList.remove("arrow-hovered");
}


window.addEventListener("scroll", () => {
    let topBtn = document.querySelector(".top-btn");

    topBtn.classList.toggle("top-btn-display", scrollY);
})

function signUpclicked() {
    let signUp = document.querySelector(".sign-up");
    let signUpWindow = document.querySelector(".sign-up-window");
    signUp.classList.toggle("sign-up-clicked");
    signUpWindow.classList.toggle("sign-up-window-display");
}

function menuClicked() {
    let menuBtn = document.querySelector(".menu");
    let navLeft = document.querySelector(".nav-left");
    let navRight = document.querySelector(".nav-right");
    menuBtn.classList.toggle("menu-clicked");
    navLeft.classList.toggle("menu-clicked");
    navRight.classList.toggle("menu-clicked");
}