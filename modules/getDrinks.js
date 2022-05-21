const URL = "https://thecocktaildb.com/api/json/v1/1/list.php?c=list";

const getDrinks = () => {
  fetch(URL)
    .then((res) => res.json())
    .then((data) => {
      console.log(data);
    })
    .catch((err) => {
      console.log(`error ${err}`);
    });
};

export default getDrinks;
