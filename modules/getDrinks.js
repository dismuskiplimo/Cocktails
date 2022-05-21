const categoriesListURL =
  "https://thecocktaildb.com/api/json/v1/1/list.php?c=list";

const getDrinks = () => {
  fetch(categoriesListURL)
    .then((res) => res.json())
    .then((data) => {
      console.log(data);
    })
    .catch((err) => {
      console.log(`error ${err}`);
    });
};

export default getDrinks;
