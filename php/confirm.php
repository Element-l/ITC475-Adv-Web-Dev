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



echo "Thank you for submitting your travel agent contact request! Here is the information you submitted:<br/><br/>";
echo "Client Name: ", $_POST["fname"]," ", $_POST["lname"], "<br/>";
echo "Client Phone Number: ", $_POST["phone"], "<br/>";
echo "Client Email: ", $_POST["email"],"<br/>";
echo "Number of People: ", $_POST["quantity"],"<br/>";
echo "Destination: ",$_POST["location"],"<br/>";
echo "Travel Date: ",$_POST["date"],"<br/>";
echo "Interested Activities: ";
$name = $_POST['activity'];

foreach ($name as $activity){ 
    echo $activity." ";
}
echo "<br/><br/>";
echo "An agent will be in touch with you soon!","<br/>";
?> 
<hr/>

</body>
</html>