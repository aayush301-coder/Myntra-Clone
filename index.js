const navLinks = document.querySelectorAll(".nav_bar a");

navLinks.forEach(link => {
link.addEventListener("click", function(){

navLinks.forEach(nav => nav.classList.remove("active"));

this.classList.add("active");

});
});

const searchInput = document.querySelector(".search_input");
const searchBar = document.querySelector(".search_bar");

searchInput.addEventListener("focus", () => {
searchBar.style.boxShadow = "0 0 0 2px #ff3f6c33";
});

searchInput.addEventListener("blur", () => {
searchBar.style.boxShadow = "none";
});

const saleItems = document.querySelectorAll(".sale_item");

saleItems.forEach(item => {

item.addEventListener("mouseenter", () => {
item.style.boxShadow = "0 6px 20px rgba(0,0,0,0.15)";
});

item.addEventListener("mouseleave", () => {
item.style.boxShadow = "none";
});

});