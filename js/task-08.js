const formEl = document.querySelector('.login-form');

formEl.addEventListener('submit', onFormSubmit);

function onFormSubmit(event) {
    
event.preventDefault();

    const formEl = event.currentTarget.elements;
    const email = formEl.email.value;
    const password = formEl.password.value;

    if (email === '' || password === '') {
        return alert('Всі поля повинні бути заповненими !!!');
    }

    const form = {
        email,
        password,
    };
    
    console.log(form);

    event.currentTarget.reset();
}



