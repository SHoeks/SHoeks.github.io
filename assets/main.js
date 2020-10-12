var scrollposition = window.scrollY;
console.log(scrollposition)

function showIMG(IMG,TEXT){
    scrollposition = window.scrollY;
    console.log(scrollposition)
    document.getElementById("logo_div").style.display = "none";
    document.getElementById("img_container").style.display = "none";
    document.getElementById("img_show_img").src = IMG;
    document.getElementById("img_description").innerHTML = TEXT;
    document.getElementById("img_show").style.display = "block";
}
function hideIMG(){
    document.getElementById("logo_div").style.display = "block";
    document.getElementById("img_container").style.display = "block"
    document.getElementById("img_show").style.display = "none";
    console.log(scrollposition)
    window.scrollTo(0, scrollposition);
}