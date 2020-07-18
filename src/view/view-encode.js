import {validateEncode} from '../controller/encode.js';
import {restore} from '../controller/restore.js';


const encode = () => {
  const view = `
    <h1 class="u-center-text">Cifrado César para información policial</h1>
    <p class="u-center-text">
      Este sitio web fue creado con el fin de proveer un cifrado personalizado
      y seguro para la información que manejan los agentes de la Policía 
      Nacional del Perú (PNP). Ante los sucesos de hackeos delictivos, la
      mejor forma de proteger nuestra información es cifrándola.
    </p>
    <div class="div-cipher u-flex">
        <label for="displacement-encode" class="u-center-text">
            Indique el número de posiciones a desplazar: 
        </label>
        <input type="number" id="displacement-encode" min="1" 
        pattern="[0-9]*" inputmode="numeric" 
        title="Ingrese un valor numérico entero mayor a cero.">

        <label for="message-encode" class="u-center-text">
          Escriba mensaje a cifrar: 
        </label>
        <textarea name="message-encode" id="message-encode" 
        title="Ingrese un texto. Solo se cifran letras del abecedario.">
        </textarea> 
        <div class="div-buttons u-flex">
            <button id="button-encode" class="u-cursor-pointer">
              Cifrar mensaje
            </button>
            <button id="button-restore" class="u-cursor-pointer">
              Restablecer
            </button>
        </div>
    </div>
    `;

  const sectionView = document.createElement('section');
  sectionView.className = 'content-view-encode-decode u-flex';
  sectionView.innerHTML = view;

  validateEncode(sectionView);
  restore(sectionView);

  return sectionView;
};


export default encode;
