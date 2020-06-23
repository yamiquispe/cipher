import encode from './encode';
import decode from './decode';
import instructions from './intructions';
import pageError from './404';


const views = {
  encode: encode,
  decode: decode,
  instructions: instructions,
  pageError: pageError,
};


export { views };
