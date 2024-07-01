document.getElementById("nav_toggle").addEventListener("click", function() {
    var navMenu = document.getElementById("nav_menu");
    if (navMenu.classList.contains("hidden")) {
        navMenu.classList.remove("hidden");
        navMenu.classList.add("show");
    } else {
        navMenu.classList.remove("show");
        navMenu.classList.add("hidden");
    }
});
