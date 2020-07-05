import cipher from '../js/encode-decode.js';


const characterInvalid = (message) => {
  let characterInvalidFound = false;

  for (let i = 0; i < message.length; i++) {
    if ((message.charCodeAt(i) < 65 && message.charCodeAt(i) !== 32) ||
      (message.charCodeAt(i) > 90 && message.charCodeAt(i) < 97) ||
      message.charCodeAt(i) > 122) {
      characterInvalidFound = true;
    }
  }

  return characterInvalidFound;
};


export const validateEncode = () => {
  const buttonEncode = document.getElementById('button-encode');
  let messageModal = '';

  buttonEncode.addEventListener('click', () => {
    const offset = document.getElementsByTagName('input')[0].value;
    const message = document.getElementsByTagName('textarea')[0].value;

    console.log(offset);
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
      messageModal = cipher.encode(parseInt(offset), message);

      console.log(messageModal);
      alert(cipher.encode(parseInt(offset), message));
    }
  });

  return messageModal;
};
