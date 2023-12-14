document.addEventListener('DOMContentLoaded', function() {
    const inputs = document.querySelectorAll('.form-control');

    inputs.forEach((input, index) => {
        input.addEventListener('input', function(event) {
            const currentValue = event.data;

            if (currentValue && index !== inputs.length - 1) {
                inputs[index + 1].focus();
            }
        });

        input.addEventListener('keydown', function(event) {
            const keyPressed = event.key;

            if (keyPressed === 'Backspace' && input.value.length === 0) {
                if (index !== 0) {
                    inputs[index - 1].focus();
                }
            }

            if (keyPressed === 'Enter') {
                const isLastInput = index === inputs.length - 1;
                const isAllFilled = [...inputs].every(input => input.value.length > 0);

                if (isLastInput && isAllFilled) {
                    window.location.href = 'index.html';
                }
            }
        });
    });
});
