import { createElement } from '../helpers/createElement.js';

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
      textContent: card.title,
    });
    categoryListItem.dataset.id = card.id;

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
