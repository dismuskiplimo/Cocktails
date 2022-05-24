import { cocktailsSection } from "./getDrinks.js";

const cocktailDetails = document.getElementById("details");
const detailsDiv = document.querySelector(".details");

const getDetails = (e) => {
  let query1 = e.target.id;

  const detailsArrow = document.getElementById("details-arrow");

  detailsArrow.addEventListener("click", () => {
    detailsDiv.innerHTML = "";
    cocktailDetails.style.display = "none";
    cocktailsSection.style.display = "block";
  });

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

        detailsDiv.innerHTML = `
      <img alt="drink" src=${drink.strDrinkThumb}>
      <h2>${drink.strDrink}</h2>
      <p>${drink.strInstructions}</p>
      <ul></ul>
      `;

        const list = document.querySelector("ul");

        const ingredients = arrayOfIngredients.filter(
          (ingredient) => ingredient !== null
        );
        ingredients.forEach((ingredient) => {
          const li = document.createElement("li");
          li.textContent = ingredient;
          list.appendChild(li);
        });
      });
    })
    .catch((err) => {
      console.log(`error ${err}`);
    });
};

export { getDetails, cocktailDetails };
