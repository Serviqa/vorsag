"use strict";

function toggleModal() {

    const joinBtn = document.getElementById('join');
    const joinModal = document.getElementById('join_modal');
    const closeBtn = document.getElementById('modal_close');

    joinBtn.addEventListener('click', function () {
        joinModal.classList.toggle('hidden');
    });

    closeBtn.addEventListener('click', toggleModal);

    function toggleModal() {
        joinModal.classList.toggle('hidden');
    }
}

export { toggleModal };