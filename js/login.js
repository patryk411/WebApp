const email = document.querySelector('#exampleFormControlInput1');
const pass = document.querySelector('#exampleFormControlInput2');
const btnDisabled = document.querySelector('.form-btn-disabled');
const btnActive = document.querySelector('.form-btn-active');

const showError = (input) => {
    input.classList.add('invalid-input');
};

const clearError = (input) => {
    input.classList.remove('invalid-input');
};

const checkLength = (input, min) => {
    return input.value.trim().length >= min;
};

const login = () => {
    const isEmailValid = checkLength(email, 8);
    const isPasswordValid = checkLength(pass, 10);

    if (isEmailValid && isPasswordValid) {
        btnActive.style.display = 'block';
        btnDisabled.style.display = 'none';
    } else {
        btnActive.style.display = 'none';
        btnDisabled.style.display = 'block';
    }
};

const checkEmail = (input) => {
    if (input.value === '') {
        showError(input);
    } else {
        clearError(input);
    }
};

const checkEmailValidation = (email) => {
    const re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/


    if(re.test(email.value)) {
        clearError(email)
    } else {
        showError(email)
    }
}

btnDisabled.addEventListener('click', (e) => {
    e.preventDefault();

    checkEmail(email);
    checkEmail(pass);
    login();
    checkEmailValidation(email)
});

email.addEventListener('input', () => {
    checkEmail(email);
    login();
});

pass.addEventListener('input', () => {
    checkEmail(pass);
    login();
});
