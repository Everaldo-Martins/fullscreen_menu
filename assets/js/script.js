const container = document.querySelector('.js-menu-container'),
    open_menu = document.querySelector('.js-menu-button'),
    close_menu = document.querySelector('.js-menu-close');

function openMenu() {
    container.classList.add("is-open");
}
function closeMenu() {
    container.classList.remove("is-open");
}
open_menu.onclick = function() {
    openMenu();
}
close_menu.onclick = function() {
    closeMenu();
}
document.onkeyup = function(e) { 
    if (e.key === "Escape") {
        if (container.classList.contains("is-open")) {
            closeMenu();
        }
    }
}
