
export const restore = () => {
  const buttonRestore = document.getElementById('button-restore');

  buttonRestore.addEventListener('click', () => {
    document.getElementsByTagName('input')[0].value = '';
    document.getElementsByTagName('textarea')[0].value = '';
  });
};
