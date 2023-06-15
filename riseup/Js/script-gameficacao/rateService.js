let ratings = {};

function rateService(stars, cardNumber) {
  ratings[cardNumber] = stars;

  const starsElements = document.querySelectorAll(`.carousel-item.active .card:nth-child(${cardNumber}) .star`);
  starsElements.forEach((starElement) => {
    starElement.classList.remove('rated');
  });

  for (let i = 0; i < stars; i++) {
    starsElements[i].classList.add('rated');
  }

  console.log(`Classificação selecionada do card ${cardNumber}:`, ratings[cardNumber]);
}
