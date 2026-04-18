const btn = document.getElementById("menuBtn");
const mobile = document.getElementById("mobileMenu");

if (btn) {
  btn.addEventListener("click", () => {
    mobile.classList.toggle("hidden");
  });
}

// DARK MODE TOGGLE
const toggleBtn = document.getElementById("themeToggle");
const html = document.documentElement;
const sunIcon = document.getElementById("sunIcon");
const moonIcon = document.getElementById("moonIcon");

// Load saved theme
if (localStorage.getItem("theme") === "dark") {
  html.classList.add("dark");
  if (sunIcon && moonIcon) {
    sunIcon.classList.remove("hidden");
    moonIcon.classList.add("hidden");
  }
}

// Toggle theme
if (toggleBtn) {
  toggleBtn.addEventListener("click", () => {
    html.classList.toggle("dark");

    if (html.classList.contains("dark")) {
      localStorage.setItem("theme", "dark");
      if (sunIcon && moonIcon) {
        sunIcon.classList.remove("hidden");
        moonIcon.classList.add("hidden");
      }
    } else {
      localStorage.setItem("theme", "light");
      if (sunIcon && moonIcon) {
        sunIcon.classList.add("hidden");
        moonIcon.classList.remove("hidden");
      }
    }
  });
}

// LOAD ICONS
if (typeof feather !== "undefined") {
  feather.replace();
}