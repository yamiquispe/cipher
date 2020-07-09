

export const modalClose = (sectionModal) => {
  const buttonClose = sectionModal.querySelector('#button-close');

  buttonClose.addEventListener('click', () => {
    sectionModal.remove();
  });
};


export const modalAccept = (sectionModal) => {
  const buttonAccept = sectionModal.querySelector('#button-accept');

  buttonAccept.addEventListener('click', () => {
    document.querySelector('input').value = '';
    document.querySelector('textarea').value = '';

    sectionModal.remove();
  });
};


export const modalCopy = (sectionModal) => {
  const buttonCopy = sectionModal.querySelector('#button-copy');
  const responseCipher = sectionModal.querySelector('#response-cipher');
  const toast = sectionModal.querySelector('span');

  buttonCopy.addEventListener('click', () => {
    const textArea = document.createElement('textarea');

    textArea.value = responseCipher.innerHTML;

    document.body.appendChild(textArea);

    // Seleccionamos texto del textarea
    textArea.select();

    try {
      // Copiando el texto seleccionado
      const selectedText = document.execCommand('copy');

      if (selectedText) toast.innerHTML = '¡Copiado!';

      else toast.innerHTML = '¡Incapaz de copiar!';
    } catch (err) {
      toast.innerHTML = '¡Browser no soportado!';
    }

    document.body.removeChild(textArea);
  });
};
