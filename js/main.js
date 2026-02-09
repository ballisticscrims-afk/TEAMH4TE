// SEARCH TOGGLE
const searchToggle = document.getElementById("search-toggle");
const searchDropdown = document.querySelector(".search-dropdown");

searchToggle.addEventListener("click", (e) => {
  e.stopPropagation();
  searchDropdown.classList.toggle("active");
});

// Close when clicking outside
document.addEventListener("click", () => {
  searchDropdown.classList.remove("active");
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
