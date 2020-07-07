

const modal = () => {
  const contentModal = `
    <div class="flex" id="flex">
        <div class="content-modal">
            <div class="modal-header flex">
              <h2>Título del modal</h2>
              <span class="close" id="close">&times;</span>
            </div>
            <div class="modal-body">
              <p>texto jejejejejje</p>
            </div>
            <div class="modal-footer">
              <button>Aceptar</button>
            </div>
        </div>
    </div>
    `;

  const divModal = document.createElement('div');
  divModal.className = 'content-view-modal';
  divModal.innerHTML = contentModal;

  return divModal;
};


export default modal;
