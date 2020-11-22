function on(IMG,TEXT) {
    document.getElementById("img_show").src = IMG;
    document.getElementById("img_description").innerHTML = TEXT;
    document.getElementById("overlay").style.display = "block";
    document.getElementById("logo").style.opacity = 0.5;
}
  
function off() {
    document.getElementById("overlay").style.display = "none";
    document.getElementById("logo").style.opacity = 1.0;
}


const appHeight = () => {
    const doc = document.documentElement
    doc.style.setProperty('--app-height', `${window.innerHeight}px`)
}
window.addEventListener('resize', appHeight)
appHeight()