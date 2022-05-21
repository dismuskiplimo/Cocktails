import getDrinks from "./modules/getDrinks.js";

const mobileMenuIcon = document.querySelector(".fa-bars");
const closeMenuBtn = document.querySelector(".fa-angle-up");
const mainSection = document.getElementById("main-section");

closeMenuBtn.style.display = "none";

mobileMenuIcon.addEventListener("click", () => {
  const mobileMenu = document.createElement("div");
  mobileMenu.innerHTML = `<div id="mobile-logo">
  <i class="fas fa-cocktail"></i>
  <span>Cocktails</span>
</div>
<div id="mobile-cocktails-list">
  <span>Categories</span>
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
});

closeMenuBtn.addEventListener("click", () => {
  const mobileMenuActive = document.querySelector(".mobile-div");
  mobileMenuActive.remove();
  closeMenuBtn.style.display = "none";
  mobileMenuIcon.style.display = "block";
});

window.addEventListener("resize", () => {
  if (window.innerWidth < 610) {
    document.location.reload();
  }
});

getDrinks();
