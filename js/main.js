// SEARCH DROPDOWN
const searchToggle = document.getElementById("search-toggle");
const searchDropdown = document.querySelector(".search-dropdown");

searchToggle.addEventListener("click", (e) => {
  e.stopPropagation();
  searchDropdown.classList.toggle("active");
});

document.addEventListener("click", () => {
  searchDropdown.classList.remove("active");
});

// ACTIVE LINK
document.querySelectorAll(".navbar a").forEach(link => {
  if (link.href === window.location.href) {
    link.classList.add("active");
  }
});

// SHRINK NAV ON SCROLL
window.addEventListener("scroll", () => {
  document.querySelector(".navbar")
    .classList.toggle("shrink", window.scrollY > 50);
});
