

const modal = (response, cipher) => {
  const contentModal = `
        <div class="content-modal">
            <div class="modal-header flex">
              <h2>${(response.error) ? '¡Error!' : 'Respuesta'}</h2>
              <span class="close" id="close">&times;</span>
            </div>
            <div class="modal-body">
              ${(response.error) ? `<p>${response.text}</p>` :
              `<p>El mensaje ${(cipher) ? 'cifrado' : 'descifrado'} es:</p>
              <textarea disabled>${response.text}</textarea>
              <button>Copiar</button>`}
              
            </div>
            <div class="modal-footer">
              <button>Aceptar</button>
            </div>
        </div>
    `;

  const sectionModal = document.createElement('section');
  sectionModal.className = 'modal';
  sectionModal.innerHTML = contentModal;

  return sectionModal;
};


export default modal;
