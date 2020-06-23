import encode from './encode.js';
import decode from './decode.js';
import instructions from './intructions.js';
import pageError from './404.js';


// Para importar correctamente un modulo siempre debo incluya la
// extensión del archivo. A diferencia de cuando se usa require
// en NodeJs.


const views = {
  encode: encode,
  decode: decode,
  instructions: instructions,
  pageError: pageError,
};


export { views };
