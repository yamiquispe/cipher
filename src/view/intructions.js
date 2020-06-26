
const instructions = () => {
    const view = `
    <div>
        <h2>Instrucciones</h2>
        <p>
            En criptografía, el cifrado César, es un tipo de cifrado por sustitución en el que 
            una letra en el texto original es reemplazada por otra letra que se encuentra un 
            número fijo de posiciones más adelante en el alfabeto. 
        </p>
    </div> 
    <div>
        <section>
            <h2>Para cifrar:</h2>
            <div>
                <p>
                    Indique el número de posiciones a desplazar.
                </p>
            </div>
            <div>
                <p>
                    Escriba el mensaje que desea cifrar y presione el botón
                    "Cifrar mensaje".
                </p>
            </div>
            <div>
                <p>
                    Se mostrará un modal con el mensaje cifrado.
                </p>
            </div>
        </section>
        <section>
            <h2>Para descifrar:</h2>
            <div>
                <p>
                    Indique el número de posiciones de desplazamiento.
                </p>
            </div>
            <div>
                <p>
                    Escriba el mensaje que desea descifrar y presione el botón
                    "Descifrar mensaje".
                </p>
            </div>
            <div>
                <p>
                    Se mostrará un modal con el mensaje descifrado.
                </p>
            </div>
        </section>
    </div>
    `;

    const sectionView = document.createElement('section');
    sectionView.innerHTML = view;

    return sectionView;
}


export default instructions;
