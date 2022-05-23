const getDetails = (e) => {
  let query1 = e.target.id;

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
          drink.strIngredient15
        );
      });
    })
    .catch((err) => {
      console.log(`error ${err}`);
    });
};

export { getDetails };
