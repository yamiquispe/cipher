import cipher from '../js/encode-decode.js';


export const validateEncode = () => {
  const buttonEncode = document.getElementById('button-encode');

  buttonEncode.addEventListener('click', () => {
    const offset = document.getElementsByTagName('input')[0].value;
    console.log('Desplazamiento: ' + offset);
    if (parseInt(offset) < 1) {
      alert('El desplazamiento ingresado no es válido.');

      offset = '';
    } else {
      const message = document.getElementsByTagName('textarea')[0].value;
      console.log('Mensaje: ' + message);

      if (message === '') {
        alert('Ingrese un texto.');
      } else {
        alert('El cifrado es: ' + cipher.encode(parseInt(offset), message));
      }
    }
  });
};
