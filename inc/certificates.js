// Modal Images

let $modal = $("#certif-modal");
let $images = $(".certif img");
let modalImg = document.getElementById("modal-image");
let $close = $(".certif .close");

$images.click(function(){
  $modal.attr("style", "display:block");
  modalImg.src = this.src;
});
$close.click(function(){
  $modal.attr("style", "display:none")
});

// Typewriter

let messageArray2 = ["My certificates"];
let textPosition2 = 0;
let speed2 = 130;

function typewriter2(){
    
    document.querySelector("#header-certif").innerHTML = messageArray2[0].substring(0, textPosition2) + '<span class="blinker">\u25ae</span>';

    if(textPosition2++ != messageArray2[0].length){
        setTimeout(typewriter2, speed2);
    }
}

window.addEventListener("load", typewriter2);