import {modalClose, modalCopy, modalAccept} from '../controller/modal.js';


const modal = (response, cipher) => {
  const contentModal = `
    <section id="modal">
      <div class="modal-header">
        <h2>${(response.error) ? '¡Error!' : 'Respuesta'}</h2>
        <button id="button-close">&times;</button>
      </div>
      <div class="modal-body">
        ${(response.error) ? `<p>${response.text}</p>` :
        `<p>El mensaje ${(cipher) ? 'cifrado' : 'descifrado'} es:</p>
         <div id="response-cipher">${response.text}</div>
         <button id="button-copy">Copiar</button>
         <span></span>`}      
      </div>
      <div class="modal-footer">
        <button id="button-accept">Aceptar</button>
      </div>
    </section>
  `;

  const sectionModal = document.createElement('div');
  sectionModal.id = 'container-modal';
  sectionModal.innerHTML = contentModal;

  modalClose(sectionModal);
  modalCopy(sectionModal);
  modalAccept(sectionModal);

  return sectionModal;
};


export default modal;
