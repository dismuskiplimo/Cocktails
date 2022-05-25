const gridContainer = document.getElementById('grid-container');
const cocktailsSection = document.getElementById('cocktails');
const mainSection = document.getElementById('main-section');
const categoriesSection = document.getElementById('categories');
const cocktailDetails = document.getElementById('details');
const leftArrow = document.querySelector('.fa-arrow-left');
const detailsDiv = document.querySelector('.details');
const cocktailsGrid = document.querySelector('.cocktails-grid');
const cocktailsArrow = document.getElementById('cocktails-arrow');

cocktailsArrow.addEventListener('click', () => {
  cocktailsGrid.innerHTML = '';
  cocktailsSection.style.display = 'none';
  categoriesSection.style.display = 'flex';
});

const getDetails = (e) => {
  const query1 = e.target.id;

  const detailsArrow = document.getElementById('details-arrow');

  detailsArrow.addEventListener('click', () => {
    detailsDiv.innerHTML = '';
    cocktailDetails.style.display = 'none';
    cocktailsSection.style.display = 'block';
  });

  fetch(`https://thecocktaildb.com/api/json/v1/1/lookup.php?i=${query1}`)
    .then((res) => res.json())
    .then((data) => {
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
          drink.strIngredient15,
        );

        detailsDiv.innerHTML = `
      <img alt="drink" src=${drink.strDrinkThumb} class="details-image">
      <h2 class="details-title">${drink.strDrink}</h2>
      <p>${drink.strInstructions}</p>
      <h3>Ingredients</h3>
      <ul></ul>
      `;
        cocktailDetails.appendChild(detailsDiv);
        const list = document.querySelector('ul');

        const ingredients = arrayOfIngredients.filter(
          (ingredient) => ingredient !== null,
        );
        ingredients.forEach((ingredient) => {
          const li = document.createElement('li');
          li.textContent = ingredient;
          list.appendChild(li);
        });
      });
    })
    .catch();
};

const getDrinks = (e) => {
  categoriesSection.style.display = 'none';
  cocktailsSection.style.display = 'block';

  let query2;

  switch (e.target.id) {
    case 'image-cocktail-drinks':
      query2 = 'c=Cocktail';
      break;
    case 'image-ordinary-drinks':
      query2 = 'c=Ordinary_Drink';
      break;
    case 'image-shot-drinks':
      query2 = 'c=Shot';
      break;
    case 'image-alcoholic-drinks':
      query2 = 'a=Alcoholic';
      break;
    case 'image-non-alcoholic-drinks':
      query2 = 'a=Non_Alcoholic';
      break;
    case 'image-liqueur-drinks':
      query2 = 'c=Homemade_Liqueur';
      break;
    default:
      query2 = 'c=Cocktail';
      break;
  }

  fetch(`https://thecocktaildb.com/api/json/v1/1/filter.php?${query2}`)
    .then((res) => res.json())
    .then((data) => {
      data.drinks.forEach((item) => {
        const cocktailsDiv = document.createElement('div');
        cocktailsDiv.classList.add('cocktails');
        cocktailsDiv.innerHTML = `
      <img src=${item.strDrinkThumb} alt="drink" id=${item.idDrink} class="cocktails-image">
      <h2 class="title">${item.strDrink}</h2>
      `;
        cocktailsGrid.appendChild(cocktailsDiv);
      });
      const cocktailDrinks = [...document.querySelectorAll('.cocktails > img')];

      cocktailDrinks.forEach((drink) => drink.addEventListener('click', (e) => {
        cocktailsSection.style.display = 'none';
        cocktailDetails.style.display = 'block';
        getDetails(e);
      }));
    })
    .catch();
};

// Categories divs event listener
gridContainer.addEventListener('click', (e) => {
  getDrinks(e);
});

export {
  leftArrow,
  getDrinks,
  categoriesSection,
  cocktailsSection,
  cocktailDetails,
  mainSection,
  getDetails,
  cocktailsGrid,
};
