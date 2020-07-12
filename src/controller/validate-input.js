import cipher from '../js/cipher.js';
import {characterInvalid} from './character-invalid.js';


export const validateInput = (offset, message, operation) => {
  const messageModal = {
    error: true,
    text: '',
  };

  // Casos: offset = ,89 (al ingresar 0.89); offset = .90 (al ingresar .90)
  //  9.90 (al ingresar 9.90); 9,90 (al ingresar 9.9)
  if (offset === '' || offset.indexOf('.') >= 0) {
    messageModal.text = `Por favor, ingrese un número válido. El desplazamiento
    debe ser un número entero.`;
  } else if (message === '') {
    messageModal.text = 'Por favor, ingrese un texto.';
  } else if (message.split('').every((character) => character === ' ')) {
    messageModal.text = 'El mensaje ingresado solo contiene carácteres vacíos.';
  } else if (characterInvalid(message)) {
    messageModal.text = `El mensaje ingresado contiene carácteres inválidos.
    Solo se puede ${(operation === 'encode') ? 'cifrar' : 'descifrar'} letras 
    del abecedario con excepción de la letra "ñ".`;
  } else {
    messageModal.error = false;

    messageModal.text = (operation === 'encode') ?
    cipher.encode(parseInt(offset), message) :
    cipher.decode(parseInt(offset), message);
  }

  return messageModal;
};
