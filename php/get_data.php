<?php
include 'db.php';

$card_id = $_GET['card_id'];

$sql = "SELECT * FROM tasks WHERE card_id = $card_id";
$result = $conn->query($sql);

$tasks = [];
if ($result->num_rows > 0) {
    while ($row = $result->fetch_assoc()) {
        $tasks[] = $row;
    }
}

echo json_encode($tasks);
$conn->close();
?>
