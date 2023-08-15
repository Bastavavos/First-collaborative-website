let menuVisible = false;
// function show or hide menu
function showHideMenu(){
    if (menuVisible){
        document.getElementById("nav").classList = "";
        menuVisible = false;
    } else {
        document.getElementById("nav").classList = "responsive";
        menuVisible = true;
    }
}

function select(){
    // Hide after selection
    document.getElementById("nav").classList = "";
    menuVisible = false;
}