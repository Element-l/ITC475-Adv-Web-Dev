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
    <!-- <div id="response"> 
        <p>Thank you for submitting your travel agent contact request! Here is the information you submitted: <br/><br/></p>
    </div>   -->
<?php
    $activitylist = "";
    if($_SERVER['REQUEST_METHOD']== 'POST'){
        $conn = mysqli_connect('localhost', 'root', '', 'testdb') or die("Connection Failed:" .mysqli_connect_error());
        $name = $_POST["fname"] . " " . $_POST["lname"];
        $phone = $_POST["phone"];
        $email = $_POST["email"];
        $count = $_POST["quantity"];
        $location = $_POST["location"];
        $date = $_POST["date"];
        $list = $_POST['activity'];
        foreach ($list as $activity){ 
            $activitylist .= $activity.", ";
        }
        $activitylist = rtrim($activitylist, ", ");

        $sql = "INSERT INTO `users` (`usr_name`, `usr_phone`, `usr_email`, `usr_count`, `usr_destination`, `usr_date`, `usr_activities`)
            VALUES ('$name', '$phone', '$email', '$count', '$location', '$date', '$activitylist')";

        $query = mysqli_query($conn, $sql);
        if($query){
            echo 'Entry Successful', "<br/><br/>";
        }
        else{
            echo 'Error Occurred', "<br/><br/>";
        }
    }

echo "Thank you for submitting your travel agent contact request! Here is the information you submitted:<br/><br/>";
echo "Client Name: ", $_POST["fname"]," ", $_POST["lname"], "<br/>";
echo "Client Phone Number: ", $_POST["phone"], "<br/>";
echo "Client Email: ", $_POST["email"],"<br/>";
echo "Number of People: ", $_POST["quantity"],"<br/>";
echo "Destination: ",$_POST["location"],"<br/>";
echo "Travel Date: ",$_POST["date"],"<br/>";
echo "Interested Activities: ", $activitylist;
echo "<br/><br/>";
echo "An agent will be in touch with you soon!","<br/>";
?> 
<hr/>

</body>
</html>