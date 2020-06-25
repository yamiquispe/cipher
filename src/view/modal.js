
const modal = () => {
    const contentModal = `
    <div class="flex" id="flex">
        <div class="content-modal">
            <div></div>
            <div></div>
            <div></div>
        </div>
    </div>
    `;

    const divModal = document.createElement('div');
    divModal.innerHTML = contentModal;

    return divModal;
}


export default modal;
