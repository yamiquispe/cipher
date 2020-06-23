
const encode = () => {
    const view = `
    <h2>Vista cifrado</h2>
    <p>Acá se cifra</p>
    `;

    const sectionView = document.createElement('section');
    sectionView.innerHTML = view;

    return sectionView;
}


export default encode;
