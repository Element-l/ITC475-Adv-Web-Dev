//initializing variables
const morning = "Good Morning";
const afternoon = "Good Afternoon";
const evening = "Good Evening";

function timeCount() {
  var today = new Date();

  var hour = today.getHours();
  if(hour<10)hour = "0"+hour;

  var minute = today.getMinutes();
  if(minute<10)minute = "0"+minute;

  var second = today.getSeconds();
  if(second<10)second = "0"+second;

  document.getElementById("clock").innerHTML = 
  hour+":"+minute+":"+second;

  if ((hour >= 0) && (hour <= 11)){
    document.getElementById("clock").innerHTML = 
  hour+":"+minute+":"+second+" "+morning;
  }
  else if ((hour >= 12) && (hour <= 17)) {
    document.getElementById("clock").innerHTML = 
  hour+":"+minute+":"+second+" "+afternoon;
  }
  else {
    document.getElementById("clock").innerHTML = 
  hour+":"+minute+":"+second+" "+evening;
  }

  if((hour >= 6) && (hour <= 18)){
    document.getElementById("sunmoon").src="./images/sun.png";
    console.log("it is day")
  }
  else{
    document.getElementById("sunmoon").src="./images/moon.png";
    console.log("it is night")
  }


  setTimeout("timeCount()", 1000);
}