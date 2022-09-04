function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const refs = {
  changeColorButton: document.querySelector('.change-color'),
  color: document.querySelector('.color'),
};

refs.changeColorButton.addEventListener('click', onChangeColorButton);

function onChangeColorButton(event) {
  refs.color.textContent = getRandomHexColor();
  document.body.style.backgroundColor = refs.color.textContent;
}