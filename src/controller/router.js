import { views } from '../view/views.js';


const router = (hash) => {
  const main = document.getElementById('view');
  main.innerHTML = '';

  switch (hash) {
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


export const viewController = (hash) => {
  if (hash === '#/' || hash === '' || hash === '#') return router('#/encode');

  return router(hash);
};
