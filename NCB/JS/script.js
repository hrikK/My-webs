function arrow1Clicked() {
    let ddMenu1 = document.querySelector(".dd-menu1"), arrow1 = document.querySelector(".arrow1");
    ddMenu1.classList.toggle("arrow-clicked");
    arrow1.classList.toggle("arrow-clicked");
}

function arrow2Clicked() {
    let ddMenu2 = document.querySelector(".dd-menu2"), arrow2 = document.querySelector(".arrow2");
    ddMenu2.classList.toggle("arrow-clicked");
    arrow2.classList.toggle("arrow-clicked");
    
}
function arrow3Clicked() {
    let ddMenu3 = document.querySelector(".dd-menu3"), arrow3 = document.querySelector(".arrow3");
    ddMenu3.classList.toggle("arrow-clicked");
    arrow3.classList.toggle("arrow-clicked");
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