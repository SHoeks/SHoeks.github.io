function showIMG(IMG,TEXT){
    document.getElementById("logo_div").style.display = "none";
    document.getElementById("img_container").style.top = "10px";
    document.getElementById("img_container").style.position = "relative";
    document.getElementById("img_show_img").src = IMG;
    document.getElementById("img_description").innerHTML = TEXT;
    document.getElementById("img_show").style.display = "block";
    window.scrollTo(0, 0);
}
function hideIMG(){
    document.getElementById("logo_div").style.display = "block";
    document.getElementById("img_container").style.cssText = "@media (max-width: 950px) {.container {top: 140px;}}"
    document.getElementById("img_container").style.position = "absolute";
    document.getElementById("img_show").style.display = "none";
    window.scrollTo(0, 0);
}