const addCounterModal = document.getElementById('modal');
const startCounterButton = document.getElementById('countBtn');
const backdrop = document.getElementById('backdrop');
const cancelCounterModalButton =
  addCounterModal.querySelector('#modalCloseBtn');

let counter = localStorage.getItem('userCounter');
if (!counter) {
  counter = 0;
}

const toggleBackdrop = () => {
  backdrop.classList.toggle('active');
};

const closeCountModal = () => {
  addCounterModal.classList.remove('active');
};

const renderCounterText = (counter) => {
  localStorage.setItem('userCounter', `${counter}`);

  const counterParagraph = document.querySelector('.text');
  if (!counterParagraph) {
    const currentCounter = document.createElement('p');
    currentCounter.className = 'text';
    currentCounter.innerHTML = `You have clicked <b>${counter} times</b> to related button`;
    addCounterModal.append(currentCounter);
  } else {
    counterParagraph.innerHTML = `You have clicked <b>${counter} times</b> to related button`;
  }
};

const resetCounter = () => {
  const resetBtn = document.querySelector('.reset-btn');
  if (resetBtn) {
    resetBtn.remove();
  }

  if (counter > 5) {
    const resetCounterBtn = document.createElement('button');
    resetCounterBtn.className = 'reset-btn';
    resetCounterBtn.innerText = 'Reset';
    addCounterModal.append(resetCounterBtn);

    resetCounterBtn.addEventListener('click', () => {
      counter = 0;
      renderCounterText(counter);
    });
  }
};

const showCountModalHandler = () => {
  counter++;

  addCounterModal.classList.toggle('active');
  toggleBackdrop();
  renderCounterText(counter);
  resetCounter();
};

const cancelCountModalHandler = () => {
  closeCountModal();
  toggleBackdrop();
};

const backdropClickHandler = () => {
  closeCountModal();
  toggleBackdrop();
};

startCounterButton.addEventListener('click', showCountModalHandler);
backdrop.addEventListener('click', backdropClickHandler);
cancelCounterModalButton.addEventListener('click', cancelCountModalHandler);
