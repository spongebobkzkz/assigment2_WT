const viewButtons = document.querySelectorAll('.view-switcher__button');
const articleList = document.querySelector('#articles-list');

viewButtons.forEach((button) => {
  button.addEventListener('click', () => {
    viewButtons.forEach((item) => item.classList.remove('is-active'));
    button.classList.add('is-active');

    const selectedView = button.dataset.view;
    articleList.className = `articles articles--${selectedView}`;
  });
});