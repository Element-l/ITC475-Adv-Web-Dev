let winner = 0;
var racerList = [];
let timeCount = 0;
//initializing racer objects 
const racer1 = {
  name: 'racer1',
  position: 0,
  minSpeed: 1,
  maxSpeed: 10,
  active: false,
}

const racer2 = {
  name: 'racer2',
  position: 0,
  minSpeed: 1,
  maxSpeed: 10,
  active: false,
}

const racer3 = {
  name: 'racer3',
  position: 0,
  minSpeed: 1,
  maxSpeed: 10,
  active: false,
}

const racer4 = {
  name: 'racer4',
  position: 0,
  minSpeed: 1,
  maxSpeed: 10,
  active: false,
}
//getting variables for html items
img1 = document.getElementById('racer1')
img2 = document.getElementById('racer2')
img3 = document.getElementById('racer3')
img4 = document.getElementById('racer4')

winnerDiv = document.getElementById('winnerDiv')
winnerImg = document.getElementById('winnerImg')
winnerText = document.getElementById('winnerText')
stoplight = document.getElementById('stoplight')

function getRndInteger(min, max) {
  return Math.floor(Math.random() * (max - min) ) + min;
}

function moveImg(object) {
  //getting random integer to move racer
  var x = getRndInteger(object['minSpeed'], object['maxSpeed'])
  //moving racer + adding to position variable
  document.getElementById(object['name']).style.left = object['position'] + x + "px"
  object['position'] = object['position'] + x
}

function resetImg(object) {
  //resetting position on screen and position variable to 0
  document.getElementById(object['name']).style.left = 0 + "px"
  object['position'] = 0
  object['active'] = false;
}

function getChecked() {
  if(document.getElementById('checkracer1').checked){
    racerList.push('White')
    racer1.active = true;
  }
  if(document.getElementById('checkracer2').checked){
    racerList.push('Yellow')
    racer2.active = true;
  }
  if(document.getElementById('checkracer3').checked){
    racerList.push('Red')
    racer3.active = true;
  }
  if(document.getElementById('checkracer4').checked){
    racerList.push('Blue')
    racer4.active = true;
  }
  let fRacer = racerList.length;
  for (let i = 0; i < fRacer; i++) {
    console.log(racerList[i])
  }
  if(fRacer < 2 || fRacer > 2){
    document.getElementById('select').innerHTML = "Incorrect amount selected!";
    racer1.active = false;
    racer2.active = false;
    racer3.active = false;
    racer4.active = false;
  }
  else{
    document.getElementById('select').innerHTML = "Submitted!";
  }
  //adding event for clicking the stoplight
  stoplight.addEventListener('click', function() {
  var racers = [];
  stoplight.src = "./images/green.png"

  //setting racers to walking animation
  if(racer1.active){img1.src = "./images/walk1.gif"; racers.push('White')}
  if(racer2.active){img2.src = "./images/walk2.gif"; racers.push('Yellow')}
  if(racer3.active){img3.src = "./images/walk3.gif"; racers.push('Red')}
  if(racer4.active){img4.src = "./images/walk4.gif"; racers.push('Blue')}
  
  
  

  //adding interval to move racers
  let raceInterval = setInterval(function(){
    //incrementing time
    timeCount = timeCount + 1;
    //calling functions to move racers
    if(racer1.active){moveImg(racer1)}
    if(racer2.active){moveImg(racer2)}
    if(racer3.active){moveImg(racer3)}
    if(racer4.active){moveImg(racer4)}
    
    //checking for winner
    if (racer1['position'] >= 800){
      winner = 'White'
      winnerImg.src = "./images/1.gif"
    }
    else if (racer2['position'] >= 800){
      winner = 'Yellow'
      winnerImg.src = "./images/2.gif"
    }
    else if (racer3['position'] >= 800){
      winner = 'Red'
      winnerImg.src = "./images/3.gif"
    }
    else if (racer4['position'] >= 800){
      winner = 'Blue'
      winnerImg.src = "./images/4.gif"
    }
    
    if (winner != 0){
      var date = getDate();
      ajax(date, racers[0], racers[1], winner)
      winnerText.innerHTML = "Winner is " + winner;
      clearInterval(raceInterval)
      //resetting images to idle animation
      img1.src = "./images/1.gif"
      img2.src = "./images/2.gif"
      img3.src = "./images/3.gif"
      img4.src = "./images/4.gif"
      //displaying winner
      winnerDiv.style.display = 'initial'

      winnerDiv.addEventListener('click', function(){
        //resetting stoplight and winner display
        stoplight.src = "./images/red.png"
        winnerDiv.style.display = 'none'
        winnerText.innerHTML = 'Winner is #'
        //reseting positions of all racers and winner variable
        resetImg(racer1)
        resetImg(racer2)
        resetImg(racer3)
        resetImg(racer4)
        winner = 0
        document.getElementById('select').innerHTML = "Select 2"
      })
    }
  //setting interval for 20ms
  }, 20)

})
  racerList = []
}

function redirect(){
  location.href = "http://localhost/finalrace/results.php";
}

function getDate(){
  var today = new Date();

  var hour = today.getHours();
  if(hour<10)hour = "0"+hour;

  var minute = today.getMinutes();
  if(minute<10)minute = "0"+minute;

  var second = today.getSeconds();
  if(second<10)second = "0"+second;

  var day = today.getDay();
  var month = today.getMonth();

  var formattedDate = month + "/" + day + " " + hour+":"+minute+":"+second;
  console.log(formattedDate);

  return formattedDate;
}

function ajax(date, racer1, racer2, winner){
  console.log("function executed");
  console.log(date + racer1 + racer2 + winner)
  $.ajax({
    method: "POST",
    url: "wrap.php",
    data: { date: date,
    firstRacer: racer1,
    secondRacer: racer2,
    winner: winner
   }
  })
    .done(function( response ) {
    });
}