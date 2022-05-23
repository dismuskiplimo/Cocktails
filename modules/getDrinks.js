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
    })
    .catch((err) => {
      console.log(`error ${err}`);
    });
};

gridContainer.addEventListener("click", (e) => {
  getDrinks(e);
});

export { mainSection, categoriesSection };
