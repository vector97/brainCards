import { createElement } from '../helpers/createElement.js';
import { showAlert } from './showAlert.js';
import { shuffleArray } from '../helpers/shuffleArray.js';

export const createPairs = (app) => {
  const pairs = createElement('section', {
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
  pairs.append(container);

  let dataCards = [];

  const flipCard = () => {
    btnCard.classList.add('card__item_flipped');
    btnCard.removeEventListener('click', flipCard);

    setTimeout(() => {
      btnCard.classList.remove('card__item_flipped');

      setTimeout(() => {
        btnCard.index++;

        if (btnCard.index === dataCards.length) {
          cardFront.textContent = 'THE END';
          showAlert('...возврат на главную...', 2000);

          setTimeout(() => {
            btnReturn.click();
          }, 2000);

          return;
        }

        cardFront.textContent = dataCards[btnCard.index][0];
        cardBack.textContent = dataCards[btnCard.index][1];

        setTimeout(() => {
          btnCard.addEventListener('click', flipCard);
        }, 200);
      }, 100);
    }, 1000);
  };

  const cardController = data => {
    dataCards = [...data];
    btnCard.index = 0;

    cardFront.textContent = data[btnCard.index][0];
    cardBack.textContent = data[btnCard.index][1];

    btnCard.addEventListener('click', flipCard);
  };

  const mount = data => {
    app.append(pairs);
    const newData = shuffleArray(data.pairs);
    cardController(newData);
  };

  const unmount = () => {
    pairs.remove();
    btnCard.removeEventListener('click', flipCard);
  };

  return {
    btnReturn,
    mount,
    unmount,
  };
};
