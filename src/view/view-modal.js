import {modalClose, modalCopy, modalAccept} from '../controller/modal.js';


const modal = (response, cipher) => {
  const contentModal = `
    <section id="modal" class="u-flex">
      <div class="modal-header u-flex">
        <h2>${(response.error) ? '¡Error!' : 'Respuesta'}</h2>
        <span id="span-close" class="u-cursor-pointer">&times;</span>
      </div>
      <div class="modal-body u-flex">
        ${(response.error) ? `<p class="u-center-text">${response.text}</p>` :
        `<p class="u-center-text">
          El mensaje ${(cipher) ? 'cifrado' : 'descifrado'} es:
         </p>
         <div id="response-cipher" class="u-flex">${response.text}</div>
         <button id="button-copy" class="u-cursor-pointer">
          Copiar
         </button>
         <span></span>`}      
      </div>
      <div class="modal-footer u-flex">
        <button id="button-accept" class="u-cursor-pointer">
          Aceptar
        </button>
      </div>
    </section>
  `;

  const sectionModal = document.createElement('div');
  sectionModal.id = 'container-modal';
  sectionModal.className = 'u-flex';
  sectionModal.innerHTML = contentModal;

  modalClose(sectionModal);
  (!response.error) && modalCopy(sectionModal);
  modalAccept(sectionModal);

  return sectionModal;
};


export default modal;
