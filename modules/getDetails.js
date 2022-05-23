import { mainSection, categoriesSection } from "./getDrinks.js";

const cocktailDetails = document.getElementById("cocktail-details");

const getDetails = (e) => {
  let query1 = e.target.id;

  fetch(`https://thecocktaildb.com/api/json/v1/1/lookup.php?i=${query1}`)
    .then((res) => res.json())
    .then((data) => {
      console.log(data);
      data.drinks.forEach((drink) => {
        const detailsDiv = document.createElement("div");
        detailsDiv.classList.add("details");
        detailsDiv.innerHTML = `
      <img alt="drink" src=${drink.strDrinkThumb}>
      <h2>${drink.strDrink}</h2>
      <ul></ul>
      <p>${drink.strInstructions}</p>
      `;
        cocktailDetails.appendChild(detailsDiv);
      });
    })
    .catch((err) => {
      console.log(`error ${err}`);
    });
};

export { getDetails, cocktailDetails };
