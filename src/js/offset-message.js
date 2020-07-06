import cipher from './cipher.js';
import {characterInvalid} from './character-invalid.js';


export const offsetMessage = (offset, message, operation) => {
  let messageModal = '';

  // Casos: offset = ,89 (al ingresar 0.89); offset = .90 (al ingresar .90)
  if (offset === '' || offset.indexOf('.') === 0 ||
    offset.indexOf(',') === 1) {
    alert('Ingrese un número válido');

    messageModal = 'Por favor, ingrese un número válido.';
  } else if (offset.indexOf('.') === 1 || offset.indexOf(',') > 1) {
    // Casos: 9.90 (al ingresar 9.90); 9,90 (al ingresar 9.9)
    alert('El desplazamiento ingresado corresponde a un número decimal.');

    messageModal = 'El desplazamiento corresponde a un número decimal.';
  } else if (message === '') {
    alert('Ingrese un texto.');

    messageModal = 'Por favor, ingrese un texto.';
  } else if (message.split('').every((character) => character === ' ')) {
    console.log('caracteres vacíos jejeeje');
  } else if (characterInvalid(message)) {
    alert('El texto ingresado contiene un carácter inválido 1');

    messageModal = 'El mensaje ingresado contiene un carácter inválido.';
  } else {
    messageModal = (operation === 'encode') ?
    cipher.encode(parseInt(offset), message) :
    cipher.decode(parseInt(offset), message);

    console.log(messageModal);
  }

  return messageModal;
};
