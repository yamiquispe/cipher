import {modalClose, modalAccept} from '../controller/modal.js';


const modal = (response, cipher) => {
  const contentModal = `
    <section class="content-modal">
      <div class="modal-header">
        <h2>${(response.error) ? '¡Error!' : 'Respuesta'}</h2>
        <button id="button-close">&times;</button>
      </div>
      <div class="modal-body">
        ${(response.error) ? `<p>${response.text}</p>` :
        `<p>El mensaje ${(cipher) ? 'cifrado' : 'descifrado'} es:</p>
        <textarea disabled>${response.text}</textarea>
        <button>Copiar</button>`}      
      </div>
      <div class="modal-footer">
        <button id="button-accept">Aceptar</button>
      </div>
    </section>
  `;

  const sectionModal = document.createElement('div');
  sectionModal.className = 'modal';
  sectionModal.innerHTML = contentModal;

  modalClose(sectionModal);
  modalAccept(sectionModal);

  return sectionModal;
};


export default modal;
