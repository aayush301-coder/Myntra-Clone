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

const preloadImages = [
"images/myntra banner1.jpg",
"images/myntra banner2.jpeg",
"images/myntra banner3.jpeg"
];

preloadImages.forEach(src => {
const img = new Image();
img.src = src;
});


const banner = document.querySelector(".banner_image");

const banners = [
"images/myntra banner1.jpg",
"images/banner2.jpeg",
"images/banner3.jpeg"
];

let bannerIndex = 0;

function changeBanner(){

banner.style.opacity = "0";

setTimeout(() => {

banner.src = banners[bannerIndex];

banner.style.opacity = "1";

bannerIndex++;

if(bannerIndex >= banners.length){
bannerIndex = 0;
}

}, 300);

}

setInterval(changeBanner, 4000);

const wishlistBtn = document.querySelectorAll(".action_container")[1];

let wishlistCount = 0;

wishlistBtn.addEventListener("click", () => {

wishlistCount++;

wishlistBtn.querySelector(".action_name").textContent =
"Wishlist (" + wishlistCount + ")";

});

const bagBtn = document.querySelectorAll(".action_container")[2];

let bagCount = 0;

bagBtn.addEventListener("click", () => {

bagCount++;

bagBtn.querySelector(".action_name").textContent =
"Bag (" + bagCount + ")";

});

const revealElements = document.querySelectorAll(".category_items");

window.addEventListener("scroll", () => {

const trigger = window.innerHeight * 0.85;

revealElements.forEach(el => {

const top = el.getBoundingClientRect().top;

if(top < trigger){
el.style.opacity = "1";
el.style.transform = "translateY(0)";
}

});

});