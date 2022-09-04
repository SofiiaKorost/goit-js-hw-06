const refs = {
  inputControl: document.querySelector('#font-size-control'),
  text: document.querySelector('#text'),
};

refs.inputControl.addEventListener('input', onInputChange);

function onInputChange(event) {
  refs.text.style.fontSize = `${event.currentTarget.value}px`;
}