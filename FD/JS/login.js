function login() {
    var username = document.getElementById('username').value;
    var password = document.getElementById('password').value;
    var message = document.getElementById('message');

    if (username === 'rmfuser' && password === 'Password01') {
        message.innerHTML = 'Login successful! Redirecting';
        setTimeout(function() {
            window.location.href = 'maps3.2.html';
        }, 2000);
    } else {
        message.innerHTML = 'Invalid username or password';
    }
}
