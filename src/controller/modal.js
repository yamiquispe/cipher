

export const modalClose = (sectionModal) => {
  const spanClose = sectionModal.querySelector('#span-close');

  spanClose.addEventListener('click', () => {
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
  const toast = sectionModal.querySelectorAll('span');

  buttonCopy.addEventListener('click', () => {
    const textArea = document.createElement('textarea');

    textArea.value = responseCipher.innerHTML;

    document.body.appendChild(textArea);

    // Seleccionamos texto del textarea
    textArea.select();

    try {
      // Copiando el texto seleccionado
      const selectedText = document.execCommand('copy');

      if (selectedText) {
        toast[1].innerHTML = '¡Copiado!';

        setTimeout(() => toast[1].innerHTML = '', 1500);
      } else {
        toast[1].innerHTML = '¡Incapaz de copiar!';

        setTimeout(() => toast[1].innerHTML = '', 1500);
      }
    } catch (err) {
      toast.innerHTML = '¡Browser no soportado!';
    }

    document.body.removeChild(textArea);
  });
};
