const menuIcon = document.getElementById("menu-icon");
const slidingBackground = document.querySelector(".sliding-background");
const mainHTML = document.querySelector("main");
const menuItems = document.getElementById("menu-items");


menuIcon.addEventListener("click", function() {
    if(menuIcon.getAttribute('name') == "menu-outline") {
        menuIcon.setAttribute('name', "close-outline");
        slidingBackground.style.top = "0";
        mainHTML.style.display = "none";
        setTimeout(() => {
            menuItems.style.display = "block";
            mainHTML.style.display = "none";
        }, 500);
    }
    else {
        menuIcon.setAttribute('name', "menu-outline");
        slidingBackground.style.top = "-100%";
        menuItems.style.display = "none";
        setTimeout(() => {
            mainHTML.style.display = "block";
            
        }, 400);
    }
}) 