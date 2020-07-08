
export const restore = (sectionView) => {
  const buttonRestore = sectionView.querySelector('#button-restore');

  buttonRestore.addEventListener('click', () => {
    sectionView.querySelector('input').value = '';
    sectionView.querySelector('textarea').value = '';
  });
};
