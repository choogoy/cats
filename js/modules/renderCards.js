const renderCards = data => {

  const correctPrice = num => {

    const a = num.toString();
    if (a.length < 3) {
      return
    }
  
    if (a.length < 7) {
      const b = a.slice(0, -3);
      const c = a.slice(a.length - 3);
      return `${b} ${c}`;
    }
  
  };

  const cards = document.querySelector('.cards');
  cards.textContent = '';

  data.forEach(({ id, age, name, price, img, like, sale, soldout }) => {
    const card = document.createElement('div');
    card.className = `card${like ? ' liked' : ''}${sale ? ' sale' : ''}`;
    card.setAttribute('data-id',`${id}`);
    card.innerHTML = `
      ${sale ? `<div class="card-sale" data-sale="${sale}">-${sale}%</div>` : ''}
      <div class="card-like">
        <svg class="like-icon" width="46" height="42" viewBox="0 0 46 42" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M33.7812 0.695312C31.2851 0.695312 28.9966 1.4863 26.9794 3.04634C25.0456 4.54197 23.758 6.44693 23 7.83214C22.242 6.44684 20.9544 4.54197 19.0206 3.04634C17.0034 1.4863 14.7149 0.695312 12.2188 0.695312C5.25298 0.695312 0 6.39293 0 13.9485C0 22.1112 6.55347 27.696 16.4746 36.1505C18.1593 37.5863 20.0689 39.2138 22.0538 40.9494C22.3154 41.1785 22.6514 41.3047 23 41.3047C23.3486 41.3047 23.6846 41.1785 23.9462 40.9495C25.9312 39.2136 27.8408 37.5862 29.5265 36.1496C39.4465 27.696 46 22.1112 46 13.9485C46 6.39293 40.747 0.695312 33.7812 0.695312Z" />
        </svg>
      </div>
      <img class="card-img" src="./images/${img}" alt="cat">
      <div class="card-info">
        <h4 class="card-title">${name}</h4>
        <div class="card-description">
          <p class="color">Коричневый окрас</p>
          <div class="age"><span>${age} мес.</span> Возраст</div>
          <div class="paws"><span>4</span> Кол-во лап</div>
        </div>
        <p class="card-price">${correctPrice(price)} руб.</p>
      </div>
      <a class="card-buy ${soldout ? 'sold-out' : ''}" href="#">${soldout ? 'Продан' : 'Купить'}</a>
    `;

    cards.append(card);
  });
};

export default renderCards;