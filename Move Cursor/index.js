let body = document.querySelector(".container");
let crsr = document.querySelector(".crsr");

body.addEventListener("mousemove", function(event){
    crsr.style.left = event.x + "px";
    crsr.style.top = event.y + "px";
})
