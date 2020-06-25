
const encode = () => {
    const view = `
    <h1>Cifrado César para información policial</h1>
    <p>
       Este sitio web fue creado con el fin de proveer un cifrado personalizado y 
       seguro para la información que manejan los agentes de Policía Nacional del 
       Perú (PNP). Ante los sucesos de hackeos delictivos, la mejor forma de proteger 
       nuestra información es cifrándola.
    </p>
    <div class="div-cipher">
        <label for="displacement">Indique el número de posiciones a desplazar: </label>
        <input type="number" name="displacement" id="displacement" min="1">

        <label for="message">Mensaje a cifrar: </label>
        <textarea name="message" id="message"></textarea> 

        <div class="div-buttons">
            <button>Cifrar mensaje</button>
            <button>Restablecer</button>
        </div>
    </div>
    `;

    const sectionView = document.createElement('section');
    sectionView.className = 'content-view';
    sectionView.innerHTML = view;

    return sectionView;
}


export default encode;
