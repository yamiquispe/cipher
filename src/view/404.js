

const pageError = () => {
    const view = `
    <div>
        <h1>¡ERROR!</h1>
        <p>
            Lo sentimos, no hemos podido encontrar el contenido solicitado.
            Inténtalo nuevamente.
        </p>
    </div>
    <img src="./assets/404.gif" alt="404">
    `;

    const sectionView = document.createElement('section');
    
    sectionView.innerHTML = view;
    sectionView.className = 'content-view-error';

    return sectionView;
}

export default pageError;
