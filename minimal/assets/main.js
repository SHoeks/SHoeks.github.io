function SetTab(evt) {
    var i, tablinks;
    tablinks = document.getElementsByClassName("tablinks");
    for (i = 0; i < tablinks.length; i++) tablinks[i].className = tablinks[i].className.replace(" active", "");

    // remove all image divs from img_container
    var removeChildDiv = document.getElementById("img_container");
    while (removeChildDiv.lastElementChild) {
        removeChildDiv.removeChild(removeChildDiv.lastElementChild);
    }

    // add image divs to img_container (BW)
    if(evt.currentTarget.id == "BW_defaultOpen") {
        var objTo = document.getElementById('img_container');
        for( i = 1; i < data.length; i++){
            var divAppend = document.createElement("div");
            divAppend.innerHTML = '<img class="img_grid" id="img' + i + '" onclick="on(' + "'BW'," + i + ');">'
            objTo.appendChild(divAppend);
            if(i==12) break // dont add more than 12 images
        }
        for (i = 1; i < data.length; i++) {
            document.getElementById("img" + i).src = quality[0] + data[i][0];
            if(i==12) break // dont add more than 12 images
        }
        // add load more btn
        if(12<(data.length-1)){ // if loaded images are less then available images (more images in data then loaded on page)
            var divAppendSpacing = document.createElement("div"); divAppendSpacing.className = "loadmore_spacing"; objTo.appendChild(divAppendSpacing);
            var divAppend = document.createElement("div"); divAppend.className = "loadmore";
            divAppend.innerHTML = '<button onclick="loadmore_bw()" id="loadMoreBW"><img id="loadmore_btn" src="assets/next.svg"></button>'
            objTo.appendChild(divAppend);
        }
        
    }
    // add image divs to img_container (Color)
    if(evt.currentTarget.id == "Colour") {
        var objTo = document.getElementById('img_container');
        for( i = 1; i < data2.length; i++){
            var divAppend = document.createElement("div");
            divAppend.innerHTML = '<img class="img_grid" id="img' + i + '" onclick="on(' + "'C'," + i + ');">'
            objTo.appendChild(divAppend);
        }
        for (i = 1; i < data2.length; i++) document.getElementById("img" + i).src = "images/C/color_temp/" + data2[i][0];
    }

    console.log("opening",evt.currentTarget.id,"tab")
    evt.currentTarget.className += " active";

}
  
// Get the element with id="BW_defaultOpen" and click on it (load main page images)
document.getElementById("BW_defaultOpen").click();

// variables to hold next and prev index
var nxt_index = 0;
var prev_index = 0;

// variable to hold current tab
var t = "none"

// turn on image overlay
function on(tt, n) {
    t = tt
    var dir = get_quality(); // get correct quality dir
    set_image_in_overlay(dir,n); // set the image
    update_prev_nxt(n); // update prev and nxt indices   
}

// return to main page, turn off overlay
function off() {
    document.getElementById("overlay").style.display = "none";
    document.getElementById("logo").style.opacity = 1.0;
    document.getElementById("img_show").style.opacity = 0.0;
    document.getElementById("img_show").src = "assets/none.jpg";
    document.getElementById("tab_bar").style.display = "flex";
}

// set next image in overlay
function next() {
    if(nxt_index == data.length){
        off()
    }else{
        set_image_in_overlay(get_quality(),nxt_index)
        update_prev_nxt(nxt_index);
    }
}

// set prev image in overlay
function prev() {
    if(prev_index == 0){
        off()
    }else{
        set_image_in_overlay(get_quality(),prev_index)
        update_prev_nxt(prev_index);
    }
}

function set_image_in_overlay(dir,n) {
    if(t == "BW"){
        var data_set = data[n]
    }else if(t == "C"){
        dir = "images/C/color_temp/"
        var data_set = data2[n]
    }
    console.log("dir:",dir,"\ntab:",t,"\nsrc:",data_set[0]);

    document.getElementById("img_description").style.opacity = 0.0; // fade out image description
    document.getElementById("img_show").style.opacity = 0.0; // fade out image
    document.getElementById("img_show").src = dir + data_set[0];
    document.getElementById("overlay").style.display = "block";
    document.getElementById("logo").style.opacity = 0.5;
    document.getElementById("img_description").innerHTML = data_set[1];
    document.getElementById("img_show").style.opacity = 1.0; // fade in image
    document.getElementById("img_description").style.opacity = 1.0; // fade in image description
    document.getElementById("tab_bar").style.display = "none";
}

// function for updating the prev and next indices
function update_prev_nxt(n) {
    nxt_index = n+1;
    prev_index = n-1;
}

// function for checking which quality to use
function get_quality() {
    if(window.innerWidth < 1100){
        var dir = quality[0];
    }else if(window.innerWidth > 1100 && window.innerWidth < 2000){
        var dir = quality[1];
    }else{
        var dir = quality[2];
    }
    return dir;
}


function loadmore_bw() {

    // check which images to load
    var img_container = document.getElementById("img_container");
    var n_c = img_container.childElementCount
    var n_i = 0
    if(img_container.childNodes[n_c-1].className == "loadmore"){
        n_i = n_c - 2
    }else{
        n_i = n_c
    }
    var i_l = data.length - n_i - 1 
    console.log(n_i + " images open\n" + i_l + " more images in data")

    // remove load more btn and spacing
    img_container.removeChild(img_container.lastElementChild);
    img_container.removeChild(img_container.lastElementChild);

    // add aditional images to img_container
    counter = 1;
    for( i = (n_i+1); i < (n_i+i_l+1); i++){
        var divAppend = document.createElement("div");
        divAppend.innerHTML = '<img class="img_grid" id="img' + i + '" onclick="on(' + "'BW'," + i + ');">'
        img_container.appendChild(divAppend);
        document.getElementById("img" + i).src = quality[0] + data[i][0];
        if(counter==12) break // dont add more than 12 images at a time
        counter++
    }

    // add load more btn
    var new_n_c = img_container.childElementCount
    console.log("now images on page: " + new_n_c + "\nimages in data: " + (data.length-1))
    if(new_n_c<(data.length-1)){ // if loaded images are less then available images (more images in data then loaded on page)
        var divAppendSpacing = document.createElement("div"); divAppendSpacing.className = "loadmore_spacing";img_container.appendChild(divAppendSpacing);
        var divAppend = document.createElement("div"); divAppend.className = "loadmore";
        divAppend.innerHTML = '<button onclick="loadmore_bw()" id="loadMoreBW"><img id="loadmore_btn" src="assets/next.svg"></button>'
        img_container.appendChild(divAppend);
    }

}