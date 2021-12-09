const gallery = document.getElementById("gallery");

window.addEventListener("scroll", function (){
    let offset = window.pageYOffset;
    gallery.style.backgroundPositionY = offset * 59 + "px"; 
})