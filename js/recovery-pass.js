document.addEventListener('DOMContentLoaded', function() {
    const emailInput = document.getElementById('email');
    const btnActive = document.querySelector('.form-btn-active');
    const btnDisabled = document.querySelector('.form-btn-disabled');

    emailInput.addEventListener('input', function() {
        const emailValue = emailInput.value;

        // Sprawdź, czy email ma co najmniej 10 znaków, zawiera '@' i inny znak specjalny
        const isValidEmail = emailValue.length >= 10 && emailValue.includes('@');

        // Pokaż odpowiedni przycisk w zależności od warunków
        if (isValidEmail) {
            btnActive.style.display = 'block';
            btnDisabled.style.display = 'none';
        } else {
            btnActive.style.display = 'none';
            btnDisabled.style.display = 'block';
        }
    });
});