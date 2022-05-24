import {
  cocktailsSection,
  mainSection,
  cocktailDetails,
  getDetails,
} from "./getDrinks.js";

const getCocktailName = (value) => {
  cocktailsSection.style.display = "block";
  cocktailsSection.classList.add("cocktails-section");
  mainSection.style.display = "none";

  const query1 = `s=${value}`;

  cocktailsSection.innerHTML =
    '<i class="fas fa-arrow-left" id="cocktails-arrow"></i>';

  const cocktailsArrow = document.getElementById("cocktails-arrow");

  cocktailsArrow.addEventListener("click", () => {
    cocktailsSection.innerHTML = "";
    cocktailsSection.style.display = "none";
    mainSection.style.display = "block";
  });

  fetch(`https://thecocktaildb.com/api/json/v1/1/search.php?${query1}`)
    .then((res) => res.json())
    .then((data) => {
      data.drinks.forEach((item) => {
        const cocktailsDiv = document.createElement("div");
        cocktailsDiv.classList.add("cocktails-grid");
        cocktailsDiv.innerHTML = `
      <div class='cocktails'>
      <img src=${item.strDrinkThumb} alt="drink" id=${item.idDrink} class="cocktails-image">
      <h2>${item.strDrink}</h2>
      </div>
      `;
        cocktailsSection.appendChild(cocktailsDiv);
      });
      const cocktailDrinks = [...document.querySelectorAll(".cocktails > img")];

      cocktailDrinks.forEach((drink) =>
        drink.addEventListener("click", (e) => {
          cocktailsSection.style.display = "none";
          cocktailDetails.style.display = "block";
          getDetails(e);
        })
      );
    })
    .catch(() => {
      const errorMsg = document.createElement("p");
      errorMsg.classList.add("error");
      errorMsg.textContent =
        "Ooops, there's no cocktail with this name. Go back! Type a letter which is included in the name or a correct name...";
      cocktailsSection.appendChild(errorMsg);
    });
};

export default getCocktailName;
