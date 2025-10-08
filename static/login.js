document.addEventListener("DOMContentLoaded", function() {
    const loginBtn = document.querySelector(".login-btn");
    if (loginBtn) {
        loginBtn.addEventListener("click", function() {
            this.innerHTML = "⏳ Logging in...";
        });
    }
});
