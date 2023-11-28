<?php
// Database configuration
$servername = "localhost";
$username = "root";
$password = "";
$dbname = "waitlist";

// Create connection
$conn = new mysqli($servername, $username, $password, $dbname);

// Check connection
if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}

// Create the subscribers table if it doesn't exist
$tableCreationQuery = "
    CREATE TABLE IF NOT EXISTS subscribers (
        id INT AUTO_INCREMENT PRIMARY KEY,
        fullname VARCHAR(255) NOT NULL,
        email VARCHAR(255) NOT NULL UNIQUE
    )
";

if ($conn->query($tableCreationQuery) === TRUE) {
    echo "Table created successfully (or already exists)";
} else {
    echo "Error creating table: " . $conn->error;
}

// Check if the form is submitted
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    // Collect form data
    $fullname = mysqli_real_escape_string($conn, $_POST["fullname"]);
    $email = mysqli_real_escape_string($conn, $_POST["email"]);

    // Insert data into the database
    $sql = "INSERT INTO subscribers (fullname, email) VALUES ('$fullname', '$email')";

    if ($conn->query($sql) === TRUE) {
        echo "Data inserted successfully";
    } else {
        echo "Error inserting data: " . $conn->error;
    }
}

// Close the database connection
$conn->close();
?>
