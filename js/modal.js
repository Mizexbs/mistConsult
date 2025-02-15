(() => {
    const refs = {
      openModalBtn: document.querySelector('[data-modal-open]'),
      openModalBtnHero: document.querySelector('[data-modal-open-hero]'),
      closeModalBtn: document.querySelector('[data-modal-close]'),
      modal: document.querySelector('[data-modal]'),
    };
  
    refs.openModalBtn.addEventListener('click', toggleModal);
    refs.openModalBtnHero.addEventListener('click', toggleModal);
    refs.closeModalBtn.addEventListener('click', toggleModal);
    console.log(openModalBtn)
    
    function toggleModal() {
      refs.modal.classList.toggle('is-hidden');
    }
  })();