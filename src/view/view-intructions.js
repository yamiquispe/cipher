

const instructions = () => {
  const view = `
    <div id="container-description-web">
        <h1 class="u-center-text">Instrucciones</h1>
        <p class="u-center-text">
            En criptografía, el cifrado César, es un tipo de cifrado por 
            sustitución en el que una letra en el texto original es reemplazada 
            por otra letra que se encuentra un número fijo de posiciones más 
            adelante en el alfabeto. 
        </p>
    </div> 
    <div id="container-instructions" class="u-flex">
        <section class="u-flex">
            <div class="subtitle-instructions">
                <h2 class="u-center-text">Para cifrar</h2>
            </div>
            <div class="item-instruction u-flex">
                <img src="../src/assets/one.png" alt="n°1 cifrado">
                <p class="u-center-text">
                    Indique el número de posiciones a desplazar.
                </p>
            </div>
            <div class="item-instruction u-flex">
                <img src="../src/assets/two.png" alt="n°2 cifrado">
                <p class="u-center-text">
                    Escriba el mensaje que desea cifrar y presione el botón
                    "Cifrar mensaje".
                </p>
            </div>
            <div class="item-instruction u-flex">          
                <img src="../src/assets/three.png" alt="n°3 cifrado">
                <p class="u-center-text">
                    Se mostrará un modal con el mensaje cifrado.
                </p>
            </div>
        </section>
        <section class="u-flex">
            <div class="subtitle-instructions">
                <h2 class="u-center-text">Para descifrar</h2>
            </div>
            <div class="item-instruction u-flex">
             <img src="../src/assets/one.png" alt="n°1 descifrado">          
              <p class="u-center-text">
                    Indique el número de posiciones de desplazamiento.
                </p>
            </div>
            <div class="item-instruction u-flex">
                <img src="../src/assets/two.png" alt="n°2 descifrado">
                <p class="u-center-text">
                    Escriba el mensaje que desea descifrar y presione el botón
                    "Descifrar mensaje".
                </p>
            </div>
            <div class="item-instruction u-flex">     
                <img src="../src/assets/three.png" alt="n°3 descifrado">
                <p class="u-center-text">
                    Se mostrará un modal con el mensaje descifrado.
                </p>
            </div>
        </section>
    </div>
    `;

  const sectionView = document.createElement('section');
  sectionView.className = 'content-view-instructions u-flex';
  sectionView.innerHTML = view;

  return sectionView;
};


export default instructions;
