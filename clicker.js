var clicks = 0;

// update function, runs code that should update every 0.1 second
setInterval(function(){
    document.getElementById("click_counter").innerHTML = clicks;
    //clicks++;
}, 100);

// onclick function for clicker image
document.getElementById("click_img").onclick = function(){
    clicks++;
    console.log("clicked");
}

document.getElementById("clickme").addEventListener("click", function() {
    clicks++;
    document.getElementById("click_counter").innerHTML = clicks;
  });
