var menu = document.getElementById("menu_button");
var close = document.getElementById("Close_button");

menu.addEventListener("click", function() {
    
    close.style.display = "block"
    menu.style.zIndex = "-1"
    document.getElementById("nav_bar_mobile").style.display = "block"
    document.getElementById("overlayId").style.display = "flex"
    
    
    
})

close.addEventListener("click", function() {

    //menu.style.display = "block"
    menu.style.zIndex = "1"
    close.style.display = "none"
    document.getElementById("nav_bar_mobile").style.display = "none"
    document.getElementById("overlayId").style.display = "none"
    
} )