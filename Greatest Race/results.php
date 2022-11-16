<!DOCTYPE html>
<html lang="en">
    <head>
        <meta content="test/html;charset=utf-8" http-equiv="Content-Type">
        <title> The Greatest Race </title>
        <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-1BmE4kWBq78iYhFldvKuhfTAU6auU8tT94WrHftjDbrCEXSU1oBoqyl2QvZ6jIW3" crossorigin="anonymous">
        <link rel="stylesheet" href="styles.css">
    </head>
    <body>
    <div class="container text-light p-3">
      <form method="post">
      <label for="first">First Racer:</label>
      <input type="text" id="first" name="first"><br><br>
      <label for="second">Last Racer:</label>
      <input type="text" id="second" name="second"><br><br>
      <input type="submit" value="Submit">
      </form>

      <br/>
      <div class="results" id="results">
        <div name="php1">
          <?php
          $servername = "localhost";
          $username = "root";

          // Create connection
          $conn = new mysqli($servername, $username, '', 'testdb');

          // Check connection
          if ($conn->connect_error) {
            die("Connection failed: " . $conn->connect_error);
          }

          $query = "SELECT * FROM `races` LIMIT 5";

          $result = mysqli_query($conn, $query);
          $rows = mysqli_fetch_all($result, MYSQLI_ASSOC);

          foreach ($rows as $row){
            echo "Timestamp: ", $row["timestamp"], "<br/>";
            echo "First Racer: ", $row["first_racer"], "<br/>";
            echo "Second Racer: ", $row["second_racer"], "<br/>";
            echo "Winner: ", $row["winner"], "<br/><br/>";
          }

          ?>
        </div>
        <div name="php2">
          <?php
            $servername = "localhost";
            $username = "root";
  
            // Create connection
            $conn = new mysqli($servername, $username, '', 'testdb');
  
            // Check connection
            if ($conn->connect_error) {
              die("Connection failed: " . $conn->connect_error);
            }

            if($_SERVER['REQUEST_METHOD']== 'POST'){
              $firstRacer = $_POST['first'];
              $secondRacer = $_POST['second'];
              $query = "SELECT * FROM `races` WHERE (first_racer='$firstRacer' AND second_racer='$secondRacer') OR (first_racer='$secondRacer' AND second_racer='$firstRacer') LIMIT 10";
              $result = mysqli_query($conn, $query);
              $rows = mysqli_fetch_all($result, MYSQLI_ASSOC);
    
              foreach ($rows as $row){
                echo "Timestamp: ", $row["timestamp"], "<br/>";
                echo "First Racer: ", $row["first_racer"], "<br/>";
                echo "Second Racer: ", $row["second_racer"], "<br/>";
                echo "Winner: ", $row["winner"], "<br/><br/>";
              }
            }
          ?>
        </div>
      </div>
    </div>
    </body>

