import { components } from './view/index.js';

export const viewChange = (hash) => {
  const main = document.getElementById('view');
  main.innerHTML = '';

  switch (hash) {
    case '#/':
      return main.appendChild(components);
    case '#/iniciasesion':
      return sectionMain.appendChild(components.login());
    case '#/creacuenta':
      return sectionMain.appendChild(components.createAccount());
    case '#/home':
      return sectionMain.appendChild(components.home());
    default:
      return sectionMain.appendChild(components.different());
  }
};


/* export const viewInitial = (hash) => {
  if (hash === '#/' || hash === '' || hash === '#') return viewChange('#/iniciasesion');

  if (hash === '#/iniciasesion') return viewChange(hash);

  return viewChange(hash);
};


export const initRouter = () => {
  window.addEventListener('load', viewInitial(window.location.hash));

  if (('onhashchange' in window)) window.onhashchange = () => viewInitial(window.location.hash);
}; */



window.addEventListener('load', viewInitial);
