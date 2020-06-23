
const pageError = () => {
    const view = `
    <h2>Vista error</h2>
    <p>Acá es vista de error</p>
    `;

    const sectionView = document.createElement('section');
    sectionView.innerHTML = view;

    return sectionView;
}

export default pageError;
