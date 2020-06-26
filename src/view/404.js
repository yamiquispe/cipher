

const pageError = () => {
    const view = `
    <h1>ERROR - Página no encontraba</h1>
    <img src="./assets/404.gif" alt="404">
    <p>
        Lo sentimos, no hemos podido encontrar el contenido solicitado.
        Inténtalo nuevamente.
    </p>
    `;

    const sectionView = document.createElement('section');
    
    sectionView.innerHTML = view;
    sectionView.className = 'content-view-error';

    return sectionView;
}

export default pageError;
