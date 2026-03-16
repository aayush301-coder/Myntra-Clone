const navLinks = document.querySelectorAll(".nav_bar a");

navLinks.forEach(link => {
link.addEventListener("click", function(){

navLinks.forEach(nav => nav.classList.remove("active"));

this.classList.add("active");

});
});