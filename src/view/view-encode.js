import {validateEncode} from '../controller/encode.js';
import {restore} from '../controller/restore.js';
import modal from '../view/view-modal.js';


const encode = () => {
  const view = `
    <h1>Cifrado César para información policial</h1>
    <p>
       Este sitio web fue creado con el fin de proveer un cifrado personalizado
       y seguro para la información que manejan los agentes de Policía Nacional
       del Perú (PNP). Ante los sucesos de hackeos delictivos, la mejor forma 
       de proteger nuestra información es cifrándola.
    </p>
    <div class="div-cipher">
        <label for="displacement">
            Indique el número de posiciones a desplazar: 
        </label>
        <input type="number" name="displacement" id="displacement" min="1" 
        pattern="[0-9]*" inputmode="numeric" 
        title="Ingrese un valor numérico entero mayor a cero.">
        <label for="message">Escriba mensaje a cifrar: </label>
        <textarea name="message" id="message" 
        title="Ingrese un texto. Solo se cifran letras.">
        </textarea> 
        <div class="div-buttons">
            <button id="button-encode">Cifrar mensaje</button>
            <button id="button-restore">Restablecer</button>
        </div>
    </div>
    <div class="modal">
        ${modal()}
    </div>
    `;

  const sectionView = document.createElement('section');
  sectionView.className = 'content-view-encode-decode';
  sectionView.innerHTML = view;

  validateEncode(sectionView);
  restore(sectionView);

  return sectionView;
};


export default encode;
