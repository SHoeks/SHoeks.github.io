var data = [ 
    ["images/img_name.png","Image description"],
    ["images/australia-cave.png", "Passage into the unknown"],
    ["images/australia-waterfall2.png", "Beyond the glimmer of another world"],
    ["images/australia-waterfall1.png", "Here we may reign secure"],
    ["images/bigsur.png", "There is none else walking"],
    ["images/australia-waterfall-dry.png", "I heard the dingoes cry"],
    ["images/norway-waterfall1.png", "The pathway to the hidden falls"],
    ["images/bosnia.png", "Smooth it glides upon its travel"]
  ];

var nxt_index = 0;
var prev_index = 0;

document.getElementById("img1").src = data[1][0];
document.getElementById("img2").src = data[2][0];
document.getElementById("img3").src = data[3][0];
document.getElementById("img4").src = data[4][0];
document.getElementById("img5").src = data[5][0];
document.getElementById("img6").src = data[6][0];
document.getElementById("img7").src = data[7][0];


function on(n) {
    document.getElementById("img_show").src = data[n][0];
    document.getElementById("img_description").innerHTML = data[n][1];
    document.getElementById("overlay").style.display = "block";
    document.getElementById("logo").style.opacity = 0.5;
    update_prev_nxt(n);
}
  
function off() {
    document.getElementById("overlay").style.display = "none";
    document.getElementById("logo").style.opacity = 1.0;
}

function next() {
    if(nxt_index == data.length){
        off()
    }else{
        document.getElementById("img_show").src = data[nxt_index][0];
        document.getElementById("img_description").innerHTML = data[nxt_index][1];
        document.getElementById("overlay").style.display = "block";
        document.getElementById("logo").style.opacity = 0.5;
        update_prev_nxt(nxt_index);
    }
}

function prev() {
    if(prev_index == 0){
        off()
    }else{
        document.getElementById("img_show").src = data[prev_index][0];
        document.getElementById("img_description").innerHTML = data[prev_index][1];
        document.getElementById("overlay").style.display = "block";
        document.getElementById("logo").style.opacity = 0.5;
        update_prev_nxt(prev_index);
    }
}

function update_prev_nxt(n) {
    nxt_index = n+1;
    prev_index = n-1;
}
