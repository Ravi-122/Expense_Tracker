document.addEventListener('DOMContentLoaded', () => {
    const form = document.querySelector('form');
    const emailInput = document.getElementById('email');
    const passwordInput = document.getElementById('password');
    const confirmInput = document.getElementById('confirmPassword');

    const showError = (input, message) => {
        let error = input.nextElementSibling;
        if (!error || !error.classList.contains('error')) {
            error = document.createElement('small');
            error.classList.add('error');
            input.after(error);
        }
        error.innerText = message;
    };

    const clearError = (input) => {
        let error = input.nextElementSibling;
        if (error && error.classList.contains('error')) {
            error.innerText = '';
        }
    };

    const validateEmail = (email) => {
        const pattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
        return pattern.test(email);
    };

    const validatePassword = (password) => {
        // Minimum 8 characters, at least 1 uppercase, 1 lowercase, 1 number, 1 special character
        const pattern = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
        return pattern.test(password);
    };

    form.addEventListener('submit', (e) => {
        let valid = true;

        // Email validation
        if (!validateEmail(emailInput.value)) {
            showError(emailInput, 'Invalid email address');
            valid = false;
        } else {
            clearError(emailInput);
        }

        // Password validation
        if (!validatePassword(passwordInput.value)) {
            showError(passwordInput, 'Password must be at least 8 characters, include uppercase, lowercase, number, and special character');
            valid = false;
        } else {
            clearError(passwordInput);
        }

        // Confirm password
        if (passwordInput.value !== confirmInput.value) {
            showError(confirmInput, 'Passwords do not match');
            valid = false;
        } else {
            clearError(confirmInput);
        }

        if (!valid) {
            e.preventDefault(); // prevent form submission if invalid
        }
    });
});
