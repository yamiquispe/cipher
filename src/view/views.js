import encode from './view-encode.js';
import decode from './view-decode.js';
import instructions from './view-intructions.js';
import pageError from './view-404.js';

// Para importar correctamente un modulo siempre debo incluya la
// extensión del archivo. A diferencia de cuando se usa require
// en NodeJs.

const views = {
  encode,
  decode,
  instructions,
  pageError,
};

export {views};
