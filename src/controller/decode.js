import {validateInput} from './validate-input.js';


export const validateDecode = (sectionView) => {
  const buttonDecode = sectionView.querySelector('#button-decode');
  let messageModal = '';

  buttonDecode.addEventListener('click', () => {
    const offset = sectionView.querySelector('input').value;
    const message = sectionView.querySelector('textarea').value;

    messageModal = validateInput(offset, message, 'decode');
  });

  return messageModal;
};
