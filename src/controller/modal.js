

export const modalClose = (sectionModal) => {
  const buttonClose = sectionModal.querySelector('#button-close');

  buttonClose.addEventListener('click', () => {
    console.log('gggggggggg', buttonClose);

    sectionModal.remove();
  });
};


export const modalAccept = (sectionModal) => {
  const buttonAccept = sectionModal.querySelector('#button-accept');

  buttonAccept.addEventListener('click', () => {
    document.querySelector('input').value = '';
    document.querySelector('textarea').value = '';

    console.log('gggggggggg', buttonAccept);

    sectionModal.remove();
  });
};
