<!DOCTYPE html>
<html lang="en">
    <head>
        <meta content="test/html;charset=utf-8" http-equiv="Content-Type">
        <title> The Greatest Race </title>
        <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-1BmE4kWBq78iYhFldvKuhfTAU6auU8tT94WrHftjDbrCEXSU1oBoqyl2QvZ6jIW3" crossorigin="anonymous">
        <link rel="stylesheet" href="styles.css">
    </head>
    <body>
      <div class="container">

        <div>
  
          <h1 class="text-center text-light p-3">The Great Race</h1>
            <div class="container, text-center">
              <img id="stoplight" src="./images/red.png" >
            </div>

            <div class="text-center" id="checkboxes" name="checkboxes">
              <p id="select">Select 2</p>
              <div>              
                <input type="checkbox" id="checkracer1" name="checkracer1" value="Racer 1">
                <label for="checkracer1"> White </label>
              </div>
              <div>
                <input type="checkbox" id="checkracer2" name="checkracer2" value="Racer 2">
                <label for="checkracer2"> Yellow </label>
              </div>
              <div>
                <input type="checkbox" id="checkracer3" name="checkracer3" value="Racer 3">
                <label for="checkracer3"> Red </label>
              </div>
              <div>
                <input type="checkbox" id="checkracer4" name="checkracer4" value="Racer 4">
                <label for="checkracer4"> Blue </label>
              </div>
              <div>
                <input type="submit" value="Submit" onclick="getChecked()">
              </div>
              <div>
                <input type="button" value="Results" onclick="redirect()">
              </div>

            </div>
  
          <div id="racers" class="pt-5">
  
            <div>
              <img id="racer1" src="./images/1.gif" >
            </div>
  
            <div>
              <img id="racer2" src="./images/2.gif" >
            </div>
  
            <div>
              <img id="racer3" src="./images/3.gif" >
            </div>
  
            <div>
              <img id="racer4" src="./images/4.gif" >
            </div>
  
            <div id="winnerDiv">
              <form method="post" onsubmit="return false" id='winnerform'>
                <input type='image' name="winnerImg" id="winnerImg" src="./images/4.gif" value="Button1">
              </form>
              <h1 class="text-light text-center" id="winnerText">Winner is </h1>
            </div>
  
          </div>
  
        </div>

      </div>
      <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/js/bootstrap.bundle.min.js" integrity="sha384-ka7Sk0Gln4gmtz2MlQnikT1wXgYsOg+OMhuP+IlRH9sENBO0LRn5q+8nbTov4+1p" crossorigin="anonymous"></script>
      <script src='scripts.js'></script>
      <script type="text/javascript" src="http://ajax.googleapis.com/ajax/libs/jquery/3.5.1/jquery.min.js"></script>  
    </body>
