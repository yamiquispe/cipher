import {offsetMessage} from '../js/offset-message.js';


export const validateDecode = () => {
  const buttonDecode = document.getElementById('button-decode');
  let messageModal = '';

  buttonDecode.addEventListener('click', () => {
    const offset = document.getElementsByTagName('input')[0].value;
    const message = document.getElementsByTagName('textarea')[0].value;

    messageModal = offsetMessage(offset, message, 'decode');
  });

  return messageModal;
};
