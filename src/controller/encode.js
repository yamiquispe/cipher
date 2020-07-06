import {offsetMessage} from '../js/offset-message.js';


export const validateEncode = () => {
  const buttonEncode = document.getElementById('button-encode');
  let messageModal = '';

  buttonEncode.addEventListener('click', () => {
    const offset = document.getElementsByTagName('input')[0].value;
    const message = document.getElementsByTagName('textarea')[0].value;

    messageModal = offsetMessage(offset, message, 'encode');
  });

  return messageModal;
};
