<?php
session_start();

// Temporary array to simulate a database
if (!isset($_SESSION['users'])) {
    $_SESSION['users'] = [];
}

if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $username = $_POST['username'];
    $password = $_POST['password'];

    // Check if the username is already registered
    if (isset($_SESSION['users'][$username])) {
        echo "Username is already taken. Please choose a different one.";
    } else {
        // Store the user in the session (simulating registration)
        $_SESSION['users'][$username] = $password;
        echo "Registration successful!";
    }
}
?>
<a href="register.html">Go to Login</a>
