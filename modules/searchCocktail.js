import { cocktailsSection, mainSection } from "./getDrinks.js";

import { getDetails, cocktailDetails } from "./getDetails.js";

const getCocktailName = (value) => {
  cocktailsSection.style.display = "block";
  mainSection.style.display = "none";

  let query1 = `s=${value}`;

  cocktailsSection.innerHTML = `<i class="fas fa-arrow-left" id="cocktails-arrow"></i>`;

  const cocktailsArrow = document.getElementById("cocktails-arrow");

  cocktailsArrow.addEventListener("click", () => {
    cocktailsSection.innerHTML = "";
    cocktailsSection.style.display = "none";
    mainSection.style.display = "block";
  });

  fetch(`https://thecocktaildb.com/api/json/v1/1/search.php?${query1}`)
    .then((res) => res.json())
    .then((data) => {
      console.log(data);

      data.drinks.forEach((item) => {
        const cocktailsDiv = document.createElement("div");
        cocktailsDiv.innerHTML = `
      <div class='cocktails'>
      <img src=${item.strDrinkThumb} alt="drink" id=${item.idDrink}>
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
    .catch((err) => {
      console.log(`error ${err}`);
    });
};

export default getCocktailName;
