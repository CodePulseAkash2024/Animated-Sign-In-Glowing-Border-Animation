
const rect = document.getElementById("rect");
const username = document.getElementById("username");
const password = document.getElementById("password");
const passwordToggle = document.getElementById("toggle-password");

function handle1() {
    if (rect) {
        rect.setAttribute("class", "rect2");
    }
}

function handle2() {
    if (rect) {
        rect.setAttribute("class", "rect1");
    }
}

if (username && password) {
    setTimeout(() => {
        if (document.activeElement !== username && document.activeElement !== password) {
            password.focus();
        }
    }, 500);

    setTimeout(() => {
        if (document.activeElement !== username && document.activeElement !== password) {
            username.focus();
        }
    }, 1500);

    username.addEventListener("focus", handle2);
    password.addEventListener("focus", handle1);
}

if (password && passwordToggle) {
    passwordToggle.addEventListener("click", () => {
        const isVisible = password.type === "text";
        password.type = isVisible ? "password" : "text";
        passwordToggle.setAttribute("aria-pressed", String(!isVisible));
        passwordToggle.setAttribute(
            "aria-label",
            isVisible ? "Show password" : "Hide password"
        );
        password.focus();
    });
}
