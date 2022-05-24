import {
  mainSection,
  categoriesSection,
  leftArrow,
  getDrinks,
  cocktailsSection,
} from "./modules/getDrinks.js";

const mobileMenuIcon = document.querySelector(".fa-bars");
const closeMenuBtn = document.querySelector(".fa-angle-up");
const categoriesSpan = document.getElementById("categories-span");
const gridContainer = document.getElementById("grid-container");

gridContainer.addEventListener("click", (e) => {
  getDrinks(e);
});

closeMenuBtn.style.display = "none";
categoriesSection.style.display = "none";

// Mobile menu (hamburger menu) event listener
mobileMenuIcon.addEventListener("click", () => {
  const mobileMenu = document.createElement("div");
  mobileMenu.innerHTML = `<div id="mobile-logo">
  <i class="fas fa-cocktail"></i>
  <span>Cocktails</span>
</div>
<div id="mobile-cocktails-list">
  <span id="mobile-categories">Categories</span>
  <fieldset>
    <input
      type="search"
      id="mobile-search"
      name="search"
      placeholder="Search cocktail..."
    />
    <i class="fas fa-search"></i>
  </fieldset>
</div>`;

  mobileMenu.classList.add("mobile-div");
  mainSection.appendChild(mobileMenu);
  mobileMenuIcon.style.display = "none";
  closeMenuBtn.style.display = "block";
  closeMenuBtn.classList.add("menu");

  const mobileCategories = document.getElementById("mobile-categories");
  mobileCategories.addEventListener("click", () => {
    mainSection.style.display = "none";
    categoriesSection.style.display = "flex";
  });
});

// Arrow up icon event listener on mobile menu
closeMenuBtn.addEventListener("click", () => {
  const mobileMenuActive = document.querySelector(".mobile-div");
  mobileMenuActive.remove();
  closeMenuBtn.style.display = "none";
  mobileMenuIcon.style.display = "block";
});

// While the mobile menu is open and when the user resizes the screen
window.addEventListener("resize", () => {
  if (window.innerWidth < 610) {
    document.location.reload();
  }
});

// Categories link event listener
categoriesSpan.addEventListener("click", () => {
  mainSection.style.display = "none";
  categoriesSection.style.display = "grid";
});

// Left arrow event listener
leftArrow.addEventListener("click", () => {
  categoriesSection.style.display = "none";
  mainSection.style.display = "block";
});
