import { views } from '../view/views.js';


export const router = (hash) => {

  console.log(hash)

  const main = document.getElementById('view');
  main.innerHTML = '';

  switch (hash) {
    case '#/':
      return main.appendChild(views.encode());
    case '#/encode':
      return main.appendChild(views.encode());
    case '#/decode':
      return main.appendChild(views.decode());
    case '#/instructions':
      return main.appendChild(views.instructions());
    default:
      return main.appendChild(views.pageError());
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


