const users = [
    {
        username: 'Terminal',
        password: '1234',
        displayName: 'Terminal User',  
        redirectPage: 'terminal.html'   // page for Terminal user
    },
    {
        username: 'rendszergazda',
        password: 'abcd',
        displayName: 'Szántó Huba',
        redirectPage: 'rendszergazda.html'  // page for rendszergazda user
    }
];

document.getElementById('loginForm').addEventListener('submit', function(e) {
    e.preventDefault();

    const inputUsername = document.getElementById('username').value;
    const inputPassword = document.getElementById('password').value;
    const errorDiv = document.getElementById('error-message');

    const matchedUser = users.find(user => user.username === inputUsername && user.password === inputPassword);

    if (matchedUser) {
        // Clear any previous error
        errorDiv.textContent = '';
        errorDiv.classList.add('d-none');

        // Redirect to the user's specific page
        window.location.href = matchedUser.redirectPage;
    } else {
        // Show error message on the page
        errorDiv.textContent = 'Helytelen felhasználónév vagy jelszó.';
        errorDiv.classList.remove('d-none');
    }
});

document.getElementById('showPasswordCheckbox').addEventListener('change', function() {
  const passwordInput = document.getElementById('password');
  if (this.checked) {
    passwordInput.type = 'text';  // Show password
  } else {
    passwordInput.type = 'password';  // Hide password
  }
});