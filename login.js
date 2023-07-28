const passwordInput = document.querySelector('.password');
const showHidePwIcon = document.querySelector('.showHidePw');

showHidePwIcon.addEventListener('click', () => {
    const type = passwordInput.getAttribute('type');
    passwordInput.setAttribute('type', type === 'password' ? 'text' : 'password');
    showHidePwIcon.classList.toggle('active');
});

const signupLinks = document.getElementsByClassName('signup-link');

for (const link of signupLinks) {
    link.addEventListener('click', (event) => {
        event.preventDefault();
        window.location.href = "signup.html";
    });
}

const loginLinks = document.getElementsByClassName('login-link');

for (const link of loginLinks) {
    link.addEventListener('click', (event) => {
        event.preventDefault();
        window.location.href = "navbar.html";
    });
}