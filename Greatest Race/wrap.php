<?php
$servername = "localhost";
$username = "root";

// Create connection
$conn = new mysqli($servername, $username, '', 'testdb');

// Check connection
if ($conn->connect_error) {
  die("Connection failed: " . $conn->connect_error);
}

$date = $_POST['date'];
$first = $_POST['firstRacer'];
$second = $_POST['secondRacer'];
$winner = $_POST['winner'];

$sql = "INSERT INTO `races` (`timestamp`, `first_racer`, `second_racer`, `winner`)
VALUES ('$date', '$first', '$second', '$winner')";

$query = mysqli_query($conn, $sql);
if($query){
echo 'Entry Successful', "<br/><br/>";
}
else{
echo 'Error Occurred', "<br/><br/>";
}
?>