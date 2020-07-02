
export const header = () => {
  const iconMenu = document.getElementById('icon-menu');
  const headerHeight = document.getElementsByTagName('header')[0].offsetHeight;
  const menuNav = document.getElementsByTagName('nav')[0];

  const paddingHeight = headerHeight + 150; // Alto de nav: 150px

  let count = 0;

  iconMenu.addEventListener('click', () => {
    count++;

    if (count % 2 !== 0) {
      menuNav.classList.add('show');

      document.body.style.paddingTop = `${paddingHeight.toString()}px`;
    } else {
      menuNav.classList.remove('show');

      document.body.style.paddingTop = `${headerHeight.toString()}px`;
    }
  });
};
