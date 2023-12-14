// Pobranie referencji do pól hasła
const passwordField1 = document.querySelector('#exampleFormControlInput2');
const passwordField2 = document.querySelectorAll('#exampleFormControlInput2')[1];

// Pobranie referencji do przycisków
const btnActive = document.querySelector('.form-btn-active');
const btnDisabled = document.querySelector('.form-btn-disabled');

// Funkcja sprawdzająca, czy hasła są identyczne
function checkPasswords() {
    const password1 = passwordField1.value;
    const password2 = passwordField2.value;

    if (password1 === password2 && password1 !== '' && password2 !== '') {
        btnActive.style.display = 'block';
        btnDisabled.style.display = 'none';
    } else {
        btnActive.style.display = 'none';
        btnDisabled.style.display = 'block';
    }
}

// Wywołanie funkcji checkPasswords() po zmianie zawartości pól hasła
passwordField1.addEventListener('input', checkPasswords);
passwordField2.addEventListener('input', checkPasswords);
