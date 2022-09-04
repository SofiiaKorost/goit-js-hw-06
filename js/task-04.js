let counterOfValue = 0;

const refs = {
  decrementBtn: document.querySelector('[data-action="decrement"]'),
  incrementBtn: document.querySelector('[data-action="increment"]'),
  value: document.querySelector('#value'),
};

refs.decrementBtn.addEventListener('click', () => {
  counterOfValue -= 1;
  refs.value.textContent = counterOfValue;
});

refs.incrementBtn.addEventListener('click', () => {
  counterOfValue += 1;
  refs.value.textContent = counterOfValue;
});










