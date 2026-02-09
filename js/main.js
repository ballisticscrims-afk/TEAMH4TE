// SEARCH TOGGLE
const searchToggle = document.getElementById("search-toggle");
const searchWrapper = document.querySelector(".search-wrapper");

searchToggle.addEventListener("click", () => {
  searchWrapper.classList.toggle("active");
});

// ACTIVE PAGE HIGHLIGHT
document.querySelectorAll(".navbar a").forEach(link => {
  if (link.href === window.location.href) {
    link.classList.add("active");
  }
});

// NAVBAR SHRINK ON SCROLL
window.addEventListener("scroll", () => {
  document.querySelector(".navbar")
    .classList.toggle("shrink", window.scrollY > 50);
});
