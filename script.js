document.getElementById('loginForm').addEventListener('submit', function (e) {
    e.preventDefault();

    document.getElementById('usernameError').textContent = '';
    document.getElementById('passwordError').textContent = '';
    document.getElementById('responseMessage').textContent = '';

    let valid = true;
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    if (!username || !/\S+@\S+\.\S+/.test(username)) {
        document.getElementById('usernameError').textContent = 'Please enter a valid email address.';
        valid = false;
    }

    if (!password || password.length < 6) {
        document.getElementById('passwordError').textContent = 'Password must be at least 6 characters long.';
        valid = false;
    }

    if (valid) {
       
        document.getElementById('responseMessage').textContent = 'Loading...';

        fetch('https://jsonplaceholder.typicode.com/posts', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                username: username,
                password: password,
            }),
        })
            .then(response => response.json())
            .then(data => {
                document.getElementById('responseMessage').textContent = 'Login successful!';
            })
            .catch((error) => {
                document.getElementById('responseMessage').textContent = 'Login failed. Please try again.';
            });
    }
});

document.getElementById('showPassword').addEventListener('change', function () {
    const passwordField = document.getElementById('password');
    if (this.checked) {
        passwordField.type = 'text';
    } else {
        passwordField.type = 'password';
    }
});
