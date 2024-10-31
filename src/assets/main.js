document.addEventListener("DOMContentLoaded", function() {
    const usernameInput = document.getElementById("usernameInput");
    const userIcon = document.getElementById("userIcon");
    
    const passwordInput = document.getElementById("passwordInput");
    const lockIcon = document.getElementById("lockIcon");

    // Function untuk update warna icon nilai input
    function updateIconColor(input, icon) {
        if (input.value.trim() !== "") {
            icon.classList.add("icon-active");
        } else {
            icon.classList.remove("icon-active");
        }
    }

    // Event input username
    usernameInput.addEventListener("focus", function() {
        userIcon.classList.add("icon-active");
    });

    usernameInput.addEventListener("blur", function() {
        updateIconColor(usernameInput, userIcon);
    });

    usernameInput.addEventListener("input", function() {
        updateIconColor(usernameInput, userIcon);
    });

    // Event input password
    passwordInput.addEventListener("focus", function() {
        lockIcon.classList.add("icon-active");
    });

    passwordInput.addEventListener("blur", function() {
        updateIconColor(passwordInput, lockIcon);
    });

    passwordInput.addEventListener("input", function() {
        updateIconColor(passwordInput, lockIcon);
    });
});