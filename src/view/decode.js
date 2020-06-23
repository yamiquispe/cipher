
const decode = () => {
    const view = `
    <h2>Vista decifrado</h2>
    <p>Acá se descifra</p>
    `;

    const sectionView = document.createElement('section');
    sectionView.innerHTML = view;

    return sectionView;
}


export default decode;
