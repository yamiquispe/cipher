import {validateInput} from './validate-input.js';


export const validateEncode = (sectionView) => {
  const buttonEncode = sectionView.querySelector('#button-encode');
  let messageModal = '';

  buttonEncode.addEventListener('click', () => {
    const offset = sectionView.querySelector('input').value;
    const message = sectionView.querySelector('textarea').value;

    messageModal = validateInput(offset, message, 'encode');
  });

  return messageModal;
};
