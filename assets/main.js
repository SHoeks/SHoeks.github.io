// data holding image names and description, first entry is ment as example
var data = [ 
    ["000.jpg", "Image description"],
    ["001.jpg", "Passage into the unknown"],
    ["002.jpg", "Beyond the glimmer of another world"],
    ["003.jpg", "Here we may reign secure"],
    ["004.jpg", "There is none else walking"],
    ["007.jpg", "Smooth it glides upon its travel"],
    ["006.jpg", "The pathway to the hidden falls"],
    ["008.jpg", "..."],
    ["005.jpg", "I heard the dingoes cry"],
];

// available quality folders
var quality = ["images/jpg_800x800/","images/jpg_1500x1500/","images/jpg_2000x2000/"];

// variables to hold next and prev index
var nxt_index = 0;
var prev_index = 0;

// setup images on main page
for (i = 1; i < data.length; i++) {
    document.getElementById("img" + i).src = quality[0] + data[i][0];
}

// turn on image overlay
function on(n) {
    var dir = get_quality(); // get correct quality dir
    set_image_in_overlay(dir,n); // set the image
    update_prev_nxt(n); // update prev and nxt indices
}

// return to main page, turn off overlay
function off() {
    document.getElementById("overlay").style.display = "none";
    document.getElementById("logo").style.opacity = 1.0;
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
    console.log(dir);
    document.getElementById("img_show").src = dir + data[n][0];
    document.getElementById("overlay").style.display = "block";
    document.getElementById("logo").style.opacity = 0.5;
    setTimeout(function() {
        document.getElementById("img_description").innerHTML = data[n][1];
    }, 500);
}

// function for updating the prev and next indices
function update_prev_nxt(n) {
    nxt_index = n+1;
    prev_index = n-1;
}

// function for checking which quality to use
function get_quality() {
    if(window.innerWidth < 600){
        var dir = quality[0];
    }else if(window.innerWidth > 600 && window.innerWidth < 1200){
        var dir = quality[1];
    }else{
        var dir = quality[2];
    }
    return dir;
}