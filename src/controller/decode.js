

const validaDes = function () {
  const offsetDes = document.getElementById('pos').value;
  console.log(`Desplazamiento: ${offsetDes}`);

  if (parseInt(offsetDes) < 1) {
    alert('El número no es válido.');

    document.getElementById('pos').value = '';
    document.getElementById('pos').focus();
  } else {
    const stringDes = document.getElementById('msjeDes').value;
    console.log(`Mensaje: ${stringDes}`);

    if (stringDes === '') {
      alert('Ingrese un texto.');
      document.getElementById('msjeDes').focus();
    } else {
      alert(`El mensaje descifrado es: ${window.cipher.decode(offsetDes, stringDes)}`);
    }
  }
};


const resDes = function resDes() {
  document.getElementById('pos').value = '';
  document.getElementById('msjeDes').value = '';
};
