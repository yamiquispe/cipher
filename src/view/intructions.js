
const instructions = () => {
    const view = `
    <h2>Instrucciones</h2>
    <p>Acá las instrucciones</p>
    <p>
    En criptografía, el cifrado César, también conocido como cifrado por desplazamiento, 
    código de César o desplazamiento de César, es una de las técnicas de cifrado más 
    simples y más usadas. Es un tipo de cifrado por sustitución en el que una letra en 
    el texto original es reemplazada por otra letra que se encuentra un número fijo de 
    posiciones más adelante en el alfabeto. 
</p>
    `;

    const sectionView = document.createElement('section');
    sectionView.innerHTML = view;

    return sectionView;
}


export default instructions;
