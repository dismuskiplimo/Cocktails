import { cocktailsSection } from "./getDrinks.js";

const cocktailDetails = document.getElementById("cocktail-details");
const detailsArrow = document.getElementById("details-arrow");

const getDetails = (e) => {
  detailsArrow.addEventListener("click", () => {
    cocktailDetails.style.display = "none";
    cocktailsSection.style.display = "block";
  });

  let query1 = e.target.id;

  fetch(`https://thecocktaildb.com/api/json/v1/1/lookup.php?i=${query1}`)
    .then((res) => res.json())
    .then((data) => {
      console.log(data);
      data.drinks.forEach((drink) => {
        const arrayOfIngredients = [];

        arrayOfIngredients.push(
          drink.strIngredient1,
          drink.strIngredient2,
          drink.strIngredient3,
          drink.strIngredient4,
          drink.strIngredient5,
          drink.strIngredient6,
          drink.strIngredient7,
          drink.strIngredient8,
          drink.strIngredient9,
          drink.strIngredient10,
          drink.strIngredient11,
          drink.strIngredient12,
          drink.strIngredient13,
          drink.strIngredient14,
          drink.strIngredient15
        );

        const ingredients = arrayOfIngredients.filter(
          (ingredient) => ingredient !== null
        );

        const detailsDiv = document.createElement("div");
        detailsDiv.classList.add("details");
        detailsDiv.innerHTML = `
      <img alt="drink" src=${drink.strDrinkThumb}>
      <h2>${drink.strDrink}</h2>
      <ul></ul>
      <p>${drink.strInstructions}</p>
      `;
        cocktailDetails.appendChild(detailsDiv);
        const list = document.querySelector("ul");

        ingredients.forEach((item) => {
          const listItem = document.createElement("li");
          listItem.textContent = item;
          list.appendChild(listItem);
        });
      });
    })
    .catch((err) => {
      console.log(`error ${err}`);
    });
};

export { getDetails, cocktailDetails };
