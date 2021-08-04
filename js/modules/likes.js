const likes = () => {
  const cards = document.querySelector('.cards');

  cards.addEventListener('click', event => {
    const target = event.target;
    const like = target.closest('.card-like');

    if (like) {
      const card = like.parentNode;
      card.classList.toggle('liked');
    }

  });
};

export default likes;