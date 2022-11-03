<!DOCTYPE html>
<html lang="en">
    <head>
        <meta content="test/html;charset=utf-8" http-equiv="Content-Type">
        <title> Mega Travel Contact Agent </title>
        <link rel="stylesheet" href="styles.css">
    </head>
    <body>
      <div class="header">
          <img src="./images/megatravellogo.png" id="logo">
          <div id="clock"></div>
      </div>
      <div class="headerseparator"></div>
      <div class="navbox"> 
          <ul>
              <li><a href="index.html">Home</a></li>
              <li><a href="about us.html">About Us</a></li>
              <li><a href="contact.html">Contact Agent</a></li>
          </ul>
      </div>
      <footer>
        <p>Copyright Protected All rights reserved</p>
    </footer>

    </body>
</html>

<?php
$servername = "localhost";
$username = "root";

// Create connection
$conn = new mysqli($servername, $username, '', 'testdb');

// Check connection
if ($conn->connect_error) {
  die("Connection failed: " . $conn->connect_error);
}

$query = "SELECT * FROM `users`";

$result = mysqli_query($conn, $query);
$rows = mysqli_fetch_all($result, MYSQLI_ASSOC);

foreach ($rows as $row){
echo "Client Name: ", $row["usr_name"], "<br/>";
echo "Client Phone Number: ", $row["usr_phone"], "<br/>";
echo "Client Email: ", $row["usr_email"],"<br/>";
echo "Number of People: ", $row["usr_count"],"<br/>";
echo "Destination: ",$row["usr_destination"],"<br/>";
echo "Travel Date: ",$row["usr_date"],"<br/>";
echo "Interested Activities: ", $row["usr_activities"];
echo "<br/><br/>";
}
?>