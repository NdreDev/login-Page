const password = document.getElementById('password')
const confirmPassword = document.getElementById('confirm_password')
const passwordError = document.getElementById('password-error')

function validatePassword() {
  if (password.value !== confirmPassword.value) {
    passwordError.classList.add('active')
    password.classList.add('invalid')
    confirmPassword.classList.add('invalid')
  } else {
    passwordError.classList.remove('active')
    password.classList.remove('invalid')
    confirmPassword.classList.remove('invalid')
  }
}