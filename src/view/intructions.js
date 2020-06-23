
const instructions = () => {
    const view = `
    <h2>Instrucciones</h2>
    <p>Acá las instrucciones</p>
    `;

    const sectionView = document.createElement('section');
    sectionView.innerHTML = view;

    return sectionView;
}


export default instructions;
