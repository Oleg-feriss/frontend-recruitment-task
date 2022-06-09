const addCountModal = document.getElementById('modal');
const startCountButton = document.getElementById('countBtn');
const backdrop = document.getElementById('backdrop');
const cancelCountModalButton = addCountModal.querySelector('#modalCloseBtn');

const toggleBackdrop = () => {
  backdrop.classList.toggle('active');
};

const closeCountModal = () => {
  addCountModal.classList.remove('active');
};

const showCountModal = () => {
  addCountModal.classList.toggle('active');
  toggleBackdrop();
};

const cancelCountModalHandler = () => {
  closeCountModal();
  toggleBackdrop();
};

const backdropClickHandler = () => {
  closeCountModal();
  toggleBackdrop();
};

startCountButton.addEventListener('click', showCountModal);
backdrop.addEventListener('click', backdropClickHandler);
cancelCountModalButton.addEventListener('click', cancelCountModalHandler);
