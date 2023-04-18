import { createElement } from '../helpers/createElement.js';

export const createHeader = (parent) => {
  const container = createElement('div', {
    className: 'container header__container',
  });
  const headerLogoLink = createElement('a', {
    href: '#',
    className: 'header__logo-link',
  });
  const logo = createElement('img', {
    className: 'header__logo',
    src: 'img/logo.svg',
    alt: 'Логотип сервиса Brain Cards',
  });
  const headerTitle = createElement('h2', {
    className: 'header__subtitle',
    textContent: 'Категории',
  });
  const headerBtn = createElement('button', {
    className: 'header__btn',
    textContent: 'Добавить категорию',
  });

  headerLogoLink.append(logo);
  container.append(headerLogoLink, headerTitle, headerBtn);
  parent.append(container);

  const updateHeaderTitle = (title) => {
    headerTitle.textContent = title;
  }

  return {
    headerLogoLink,
    headerBtn,
    updateHeaderTitle,
  };
};
