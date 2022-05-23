const cocktailsSection = document.getElementById("cocktails");
const gridContainer = document.getElementById("grid-container");
const mainSection = document.getElementById("main-section");
const categoriesSection = document.getElementById("categories");

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
      console.log(data);
      data.drinks.forEach((item) => {
        const cocktailsDiv = document.createElement("div");
        cocktailsDiv.innerHTML = `
      <div class='cocktails' id=${item.strDrink}>
      <img src=${item.strDrinkThumb} alt="drink">
      <h2>${item.strDrink}</h2>
      </div>
      `;
        cocktailsSection.appendChild(cocktailsDiv);
      });
    })
    .catch((err) => {
      console.log(`error ${err}`);
    });

  const cocktailDrinks = [...document.querySelectorAll(".cocktails")];
  cocktailDrinks.addEventListener("click", (e) => {});
};

gridContainer.addEventListener("click", (e) => {
  getDrinks(e);
});

export { mainSection, categoriesSection };
