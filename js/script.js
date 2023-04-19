import { createCategory } from './components/createCategory.js';
import { createHeader } from './components/createHeader.js';
import { createElement } from './helpers/createElement.js';
import { fetchCards, fetchCategories } from './service/api.service.js';
import { createEditCategory } from './components/createEditCategory.js';
import { createPairs } from './components/createPairs.js';

const initApp = async () => {
  const headerParent = document.querySelector('.header');
  const app = document.querySelector('#app');

  const headerObj = createHeader(headerParent);
  const categoryObj = createCategory(app);
  const editCategoryObj = createEditCategory(app);
  const cardObj = createPairs();

  const allSectionUnmount = () => {
    [categoryObj, editCategoryObj].forEach(obj => obj.unmount());
  };

  const renderIndex = async e => {
    e?.preventDefault();
    allSectionUnmount();
    const categories = await fetchCategories();

    if (categories.error) {
      app.append(createElement('p', {
        className: 'server-error',
        textContent: 'Ошибка сервера. Попробуйте зайти позже',
      }));

      return;
    }

    categoryObj.mount(categories);
  };

  renderIndex();

  headerObj.headerLogoLink.addEventListener('click', renderIndex);
  headerObj.headerBtn.addEventListener('click', () => {
    allSectionUnmount();
    headerObj.updateHeaderTitle('Новая категория');
    editCategoryObj.mount();
  });

  categoryObj.categoryList.addEventListener('click', async ({ target }) => {
    const categoryItem = target.closest('.category__item');

    if (target.closest('.category__edit')) {
      const dataCards = await fetchCards(categoryItem.dataset.id);
      allSectionUnmount();
      headerObj.updateHeaderTitle('Редактирование');
      editCategoryObj.mount(dataCards);
      return;
    }
  });
};

initApp();
