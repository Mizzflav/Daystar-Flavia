document.getElementById('login-form').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent form submission

    // Simulate login with dummy data
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    // Dummy data for demonstration
    const dummyUser = {
        username: 'Flavia',
        password: 'password123',
    };

    // Check if entered credentials match dummy data
    if (username === dummyUser.username && password === dummyUser.password) {
        // Redirect to dashboard page (replace 'user-dashboard.html' with the actual dashboard page URL)
        window.location.href = 'user-dashboard.html';
    } else {
        // Display error message for invalid credentials
        alert('Invalid username or password. Please try again.');
    }
});
