const registerBtn = document.querySelector('.js-navbar__register') 
const loginBtn = document.querySelector('.js-navbar__login') 
const modal = document.querySelector('.js-modal')
const modalOverlay = document.querySelector('.js-modal__overlay')
const registerForm = document.querySelector('.js-auth-register')
const loginForm = document.querySelector('.js-auth-login')
const switchBtns = document.querySelectorAll('.js-auth-form__switch-btn')
const backBtns = document.querySelectorAll('.js-auth-form__controls-back')

function showRegisterForm() {
    modal.classList.remove('close')
    registerForm.classList.remove('close')
}

function showLoginForm() {
    modal.classList.remove('close')
    loginForm.classList.remove('close')
}

function closeModal() {
    if (registerForm.classList.contains('close')) {
        loginForm.classList.add('close')
    }
    if (loginForm.classList.contains('close')) {
        registerForm.classList.add('close')
    }
    modal.classList.add('close')
}

registerBtn.addEventListener('click', showRegisterForm)
loginBtn.addEventListener('click', showLoginForm)
modalOverlay.addEventListener('click', closeModal)

for (const switchBtn of switchBtns) {
    switchBtn.addEventListener('click', () => {
        if (switchBtn.closest('.js-auth-register')) {
            registerForm.classList.add('close')
            loginForm.classList.remove('close')
        }
        if (switchBtn.closest('.js-auth-login')) {
            loginForm.classList.add('close')
            registerForm.classList.remove('close')
        }
    })
}

for (const backBtn of backBtns) {
    backBtn.addEventListener('click', closeModal)
}