import { getDetails } from "./getDetails.js";

const cocktailsSection = document.getElementById("cocktails");
const mainSection = document.getElementById("main-section");
const categoriesSection = document.getElementById("categories");
const leftArrow = document.querySelector(".fa-arrow-left");

cocktailsSection.style.display = "none";

const getDrinks = (e) => {
  categoriesSection.style.display = "none";
  cocktailsSection.style.display = "block";

  let query2;

  switch (e.target.id) {
    case "image-cocktail-drinks":
      query2 = "c=Cocktail";
      break;
    case "image-ordinary-drinks":
      query2 = "c=Ordinary_Drink";
      break;
    case "image-shot-drinks":
      query2 = "c=Shot";
      break;
    case "image-alcoholic-drinks":
      query2 = "a=Alcoholic";
      break;
    case "image-non-alcoholic-drinks":
      query2 = "a=Non_Alcoholic";
      break;
    case "image-liqueur-drinks":
      query2 = "c=Homemade_Liqueur";
      break;
  }

  fetch(`https://thecocktaildb.com/api/json/v1/1/filter.php?${query2}`)
    .then((res) => res.json())
    .then((data) => {
      data.drinks.forEach((item) => {
        const cocktailsDiv = document.createElement("div");
        cocktailsDiv.innerHTML = `
      <div class='cocktails'>
      <img src=${item.strDrinkThumb} alt="drink" id=${item.idDrink}>
      <h2>${item.strDrink}</h2>
      </div>
      `;
        cocktailsSection.appendChild(cocktailsDiv);
        const cocktailDrinks = [
          ...document.querySelectorAll(".cocktails > img"),
        ];
        cocktailDrinks.forEach((drink) =>
          drink.addEventListener("click", (e) => {
            cocktailsSection.style.display = "none";
            cocktailDetails.style.display = "block";
            getDetails(e);
          })
        );
      });
    })
    .catch((err) => {
      console.log(`error ${err}`);
    });
};

export {
  mainSection,
  categoriesSection,
  leftArrow,
  cocktailsSection,
  getDrinks,
};
