<?php
$servername = "localhost";
$username = "root";

// Create connection
$conn = new mysqli($servername, $username, '', 'testdb');

// Check connection
if ($conn->connect_error) {
  die("Connection failed: " . $conn->connect_error);
}

@$user = $_POST['user'];
@$pass = $_POST['pass'];

$userinput = 0;
$passwordinput = 0;

if($_SERVER['REQUEST_METHOD']== 'POST'){
  $query = "SELECT count(*) as total FROM `login` where username='$user'";
  $result = mysqli_query($conn, $query);
  $rows = mysqli_fetch_all($result, MYSQLI_ASSOC);
  foreach ($rows as $row){
    $userinput = $row['total'];
  }

  $query = "SELECT count(*) as total FROM `login` where password='$pass'";
  $result = mysqli_query($conn, $query);
  $rows = mysqli_fetch_all($result, MYSQLI_ASSOC);
  foreach ($rows as $row){
    $passwordinput = $row['total'];
  }
}

if(
  $userinput == 1
&& $passwordinput == 1)
{
        session_start();
        $_SESSION["auth"] = 1;
        header('Location: http://localhost/test/admin.php');
        die();
}
else
{
    if(isset($_POST))
    {

            echo "<form method=\"POST\" action=\"login.php\">
            User <input type=\"text\" name=\"user\"></input><br/>
            Pass <input type=\"password\" name=\"pass\"></input><br/>
            <input type=\"submit\" name=\"submit\" value=\"Go\"></input>
            </form>";


    }
}
?>