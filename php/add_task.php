<?php
include 'db.php';

if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    $card_id = $_POST['card_id'];
    $task_text = $_POST['task_text'];

    $sql = "INSERT INTO tasks (card_id, task_text) VALUES ('$card_id', '$task_text')";
    if ($conn->query($sql) === TRUE) {
        echo "New task created successfully";
    } else {
        echo "Error: " . $sql . "<br>" . $conn->error;
    }
}
$conn->close();
?>
