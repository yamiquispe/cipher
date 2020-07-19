const pageError = () => {
  const view = `
    <div class="u-flex">
        <h1 class="u-center-text">¡ERROR!</h1>
        <p class="u-center-text">
            Lo sentimos, no hemos podido encontrar el contenido solicitado.
            Inténtalo nuevamente.
        </p>
    </div>
    <img src="../src/assets/404.gif" alt="404">
    `;

  const sectionView = document.createElement('section');

  sectionView.innerHTML = view;
  sectionView.className = 'content-view-error u-flex';

  return sectionView;
};

export default pageError;
