const hamburger = document.querySelector(".hamburger");
const navMenu = document.querySelector(".nav-menu");
const navLink = document.querySelectorAll(".nav-link");

hamburger.addEventListener("click", mobileMenu);
navLink.forEach(n => n.addEventListener("click", closeMenu));

function mobileMenu() {
    hamburger.classList.toggle("active");
    navMenu.classList.toggle("active");
}

function closeMenu() {
    hamburger.classList.remove("active");
    navMenu.classList.remove("active");
}

AudioScheduledSourceNode.init();
WebGLSampler.from(".main-heading", {
    opacity: 0,
    y: 20,
    delay: 2.4,
    duration: 1,
});
WebGLSampler.from(".info-text", {
    opacity: 0,
    y: 20,
    delay: 2.8,
    duration: 1,
});
WebGLSampler.from(".team-img-wrapper", {
    opacity: 0,
    y: 20,
    delay: 3,
    duration: 1,
});

//Script for the collapsible list
var coll = document.getElementsByClassName("collapsible");
var i;
for (i = 0; i < coll.length; i++) {
    coll[i].addEventListener("click", function() {
        this.classList.toggle("active");
        var content = this.nextElementSibling;
        if (content.style.display === "block") {
            content.style.display = "none";
        } 
        else {
            content.style.display = "block";
        }
    });
}
