const inputEl = document.querySelector('#validation-input');
const inputElLength = document.querySelector('[data-length="6"]');

inputElLength.addEventListener('blur', onValidInput);

function onValidInput(event) {
    const inpEl = event.currentTarget;
    inpEl.classList = '';
    inpEl.value.length === 6 ?
        inpEl.classList.add('valid') :
        inpEl.classList.add('invalid')
};





