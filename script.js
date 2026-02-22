function checkPasswordStrength() {

    const password = document.getElementById("password").value;
    const strengthIndicator = document.getElementById("strength-indicator");
    const strengthText = document.getElementById("strength-text");

    const [weak, medium, strong] = strengthIndicator.children;

    // Reset styles
    weak.classList.remove("weak");
    medium.classList.remove("medium");
    strong.classList.remove("strong");
    strengthText.textContent = "";

    // Password rules
    const hasUpperCase = /[A-Z]/.test(password);
    const hasLowerCase = /[a-z]/.test(password);
    const hasNumbers = /[0-9]/.test(password);
    const hasSpecialChars = /[!@#$%^&*]/.test(password);
    const isLongEnough = password.length >= 8;

    let strength = 0;

    if (hasUpperCase) strength++;
    if (hasLowerCase) strength++;
    if (hasNumbers) strength++;
    if (hasSpecialChars) strength++;
    if (isLongEnough) strength++;

    // Update UI
    if (strength <= 2) {

        weak.classList.add("weak");
        strengthText.textContent = "Weak";
        strengthText.style.color = "#ff4d4d";

    } else if (strength <= 4) {

        weak.classList.add("weak");
        medium.classList.add("medium");
        strengthText.textContent = "Medium";
        strengthText.style.color = "#ffc107";

    } else {

        weak.classList.add("weak");
        medium.classList.add("medium");
        strong.classList.add("strong");
        strengthText.textContent = "Strong";
        strengthText.style.color = "#4caf50";
    }
}