import { createElement } from '../helpers/createElement.js';
import { declOfNum } from '../helpers/declOfNum.js';

export const createCategory = (app) => {
  const category = createElement('section', {
    className: 'category section-offset',
  });

  const container = createElement('div', {
    className: 'container',
  });

  const categoryList = createElement('ul', {
    className: 'category__list',
  });

  const createCategoryCard = (card) => {
    const categoryListItem = createElement('li', {
      className: 'category__item',
    });

    categoryListItem.dataset.id = card.id;

    const categoryCard = createElement('button', {
      className: 'category__card',
    });

    const cardTitle = createElement('span', {
      className: 'category__title',
      textContent: card.title,
    });

    const cardPairs = createElement('span', {
      className: 'category__pairs',
      textContent: declOfNum(card.length, ['пара', 'пары', 'пар']),
    });

    categoryCard.append(cardTitle, cardPairs);

    const cardEdit = createElement('button', {
      className: 'category__btn category__edit',
      ariaLabel: 'редактировать',
    });

    const cardDelete = createElement('button', {
      className: 'category__btn category__del',
      ariaLabel: 'удалить',
    });

    categoryListItem.append(categoryCard, cardEdit, cardDelete);

    return categoryListItem;
  };

  container.append(categoryList);
  category.append(container);

  const mount = (data) => {
    categoryList.textContent = '';
    app.append(category);
    const cards = data.map(createCategoryCard);
    categoryList.append(...cards);
  };

  const unmount = () => {
    category.remove();
  };

  return {
    mount,
    unmount,
    categoryList,
  };
};
