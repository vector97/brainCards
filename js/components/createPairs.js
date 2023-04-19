import { createElement } from '../helpers/createElement.js';

export const createPairs = () => {
  const card = createElement('section', {
    className: 'card section-offset',
  });

  const container = createElement('div', {
    className: 'container card__container',
  });

  const btnReturn = createElement('button', {
    className: 'card__return',
    ariaLabel: 'Возврат к категориям',
  });

  const btnCard = createElement('button', {
    className: 'card__item',
  });

  const cardFront = createElement('span', {
    className: 'card__front',
    textContent: 'улыбка',
  });

  const cardBack = createElement('span', {
    className: 'card__back',
    textContent: 'smile',
  });

  btnCard.append(cardFront, cardBack);
  container.append(btnReturn, btnCard);
  card.append(container);

  return card;
};
