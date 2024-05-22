document.addEventListener("DOMContentLoaded", () => {
    const form = document.querySelector("form");
    const usernameInput = document.getElementById("username");
    const passwordInput = document.getElementById("password");

    form.addEventListener("submit", (event) => {
        event.preventDefault(); // Prevent form from submitting
        
        // Clear any previous error messages
        clearErrorMessages();

        // Validate the form
        let valid = true;

        if (usernameInput.value.trim() === "") {
            showError(usernameInput, "Username is required.");
            valid = false;
        }

        if (passwordInput.value.trim() === "") {
            showError(passwordInput, "Password is required.");
            valid = false;
        }

        if (valid) {
            // If form is valid, you can proceed with form submission
            // For example, you can send the form data using AJAX
            console.log("Form is valid. Submitting...");
            form.submit();
        }
    });

    function showError(input, message) {
        const errorElement = document.createElement("div");
        errorElement.classList.add("error-message");
        errorElement.innerText = message;
        input.parentElement.appendChild(errorElement);
    }

    function clearErrorMessages() {
        const errorMessages = document.querySelectorAll(".error-message");
        errorMessages.forEach((element) => element.remove());
    }
});
