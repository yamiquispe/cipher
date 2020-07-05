import {header} from './header.js';
import {viewController} from './router.js';
import {validateEncode} from './encode.js';
import {restore} from './restore.js';


const hashChange = () => {
  // Muestra al cargar el documento la vista encode.
  viewController(window.location.hash);

  // hashchange: Evento que se dispara al cambiar el hash de la URL.
  window.addEventListener('hashchange', () => viewController(location.hash));
};


// load: Evento que se dispara al cargar el documento.
window.addEventListener('load', () => {
  header();
  hashChange();
  validateEncode();
  restore();
});
