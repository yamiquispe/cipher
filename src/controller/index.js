import { header } from './header.js';
import { router } from './router.js';


const hashChange = () => {
  console.log('aquí gggggg');

  router(window.location.hash);

  // hashchange: Evento que se dispara al cambiar el hash de la URL.
  window.addEventListener('hashchange', () => router(window.location.hash));
}


// load: Evento que se dispara al cargar el documento.
window.addEventListener('load', () => {
  header();
  hashChange();
});
