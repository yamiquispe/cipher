import {validateDecode} from '../controller/decode.js';
import {restore} from '../controller/restore.js';


const decode = () => {
  const view = `
    <h1 class="u-center-text">Cifrado César para información policial</h1>
    <p class="u-center-text">
      Este sitio web fue creado con el fin de proveer un cifrado personalizado
      y seguro para la información que manejan los agentes de la Policía
      Nacional del Perú (PNP). Ante los sucesos de hackeos delictivos, la 
      mejor forma de proteger nuestra información es cifrándola.
    </p>
    <div class="div-cipher u-flex">
      <label for="displacement-decode" class="u-center-text">
        Indique el número de posiciones de desplazamiento: 
      </label>
      <input type="number" id="displacement-decode" min="1"
      pattern="[0-9]*" inputmode="numeric" 
      title="Ingrese un valor numérico entero mayor a cero.">

      <label for="message-decode" class="u-center-text">
        Escriba mensaje a descifrar: 
      </label>
      <textarea name="message-decode" id="message-decode"
      title="Ingrese un texto. Solo se cifran letras del abecedario.">
      </textarea> 

      <div class="div-buttons u-flex">
        <button type="button" id="button-decode" class="u-cursor-pointer">
          Descifrar mensaje
        </button>
        <button type="button" id="button-restore" class="u-cursor-pointer">
          Restablecer
        </button>
      </div>
    </div>
    `;

  const sectionView = document.createElement('section');
  sectionView.className = 'content-view-encode-decode u-flex';
  sectionView.innerHTML = view;

  validateDecode(sectionView);
  restore(sectionView);

  return sectionView;
};


export default decode;
