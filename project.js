
navigation.js
const toggleBtn = document.getElementById("menuToggle");
const navMenu = document.getElementById("navMenu");
 
toggleBtn.addEventListener("click", function () {
  const isHidden = navMenu.classList.toggle("hidden");
 
  toggleBtn.textContent = isHidden ? "Show Menu" : "Hide Menu";
  toggleBtn.setAttribute("aria-expanded", String(!isHidden));
});
 