(() => {
    const refs = {
      openModalBtns: document.querySelectorAll('[data-modal-open]'),
      closeModalBtn: document.querySelector('[data-modal-close]'),
      modal: document.querySelector('[data-modal]'),
    };
  
    refs.openModalBtns.forEach((btn)=>btn.addEventListener('click', toggleModal))
    refs.closeModalBtn.addEventListener('click', toggleModal);
    console.log(openModalBtn)
    
    function toggleModal() {
      refs.modal.classList.toggle('is-hidden');
    }
})();