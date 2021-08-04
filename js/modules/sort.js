import getData from "./getData.js";
import renderCards from "./renderCards.js";

const sort = () => {
  const sortItems = document.querySelectorAll('.sort-item');

  sortItems.forEach(item => {
    item.addEventListener('click', event => {
      event.preventDefault();

      item.classList.toggle('decrease');
      item.classList.toggle('increase');

      const sortCategory = item.id;

      getData('DB/DB.json')
        .then(data => {
          let arr = [];
          if (item.classList.contains('decrease')) {
            arr = data.sort((a, b) => a[sortCategory] - b[sortCategory]);
          }

          if (item.classList.contains('increase')) {
            arr = data.sort((a, b) => b[sortCategory] - a[sortCategory]);
          }

          renderCards(arr);
        });
    });
  });

};

export default sort;