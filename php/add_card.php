<?php
include 'db.php';

if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    $name = $_POST['name'];
    $color = $_POST['color'];

    $sql = "INSERT INTO cards (name, color) VALUES ('$name', '$color')";
    if ($conn->query($sql) === TRUE) {
        echo "New card created successfully";
    } else {
        echo "Error: " . $sql . "<br>" . $conn->error;
    }
}
$conn->close();
?>
