function Appliance(id) {
  this.id = id;
  this.startDate =  new Date();
  this.endDate = new Date();
  this.isOn = false;
  this.passTime = function(start, end){
    this.startDate.setHours(start.slice(0,2));
    this.startDate.setMinutes(start.slice(3,5));
    this.startDate.setSeconds(0);

    this.endDate.setHours(end.slice(0,2));
    this.endDate.setMinutes(end.slice(3,5));
    this.endDate.setSeconds(0);

  };
  this.getStart = function(){
    return this.startDate.getTime();
  };
  this.getEnd = function(){
    return this.endDate.getTime();
  };
  this.testOn = function(date){
    if(this.startDate.getTime() < date && this.endDate.getTime() > date){
      document.getElementById(this.id).style.backgroundColor = "green";
      this.isOn = true;
    }
    else{
      document.getElementById(this.id).style.backgroundColor = "rgb(124, 124, 124)";
      this.isOn = false;
    }
    return this.isOn;
  }
};

var garage = new Appliance(1);
var dryer = new Appliance(2);
var washer = new Appliance(3);
var backdoor= new Appliance(4);
var living= new Appliance(5);
var dining= new Appliance(6);
var kitchen= new Appliance(7);
var frontdoor= new Appliance(8);
var bathroom= new Appliance(9);
var desklamp= new Appliance(10);
var floorlamp= new Appliance(11);

function startRun(){
  run();
  var t=setInterval(run, 1000);
}
function run(){
  var today = new Date();

  var hour = today.getHours();
  if(hour<10)hour = "0"+hour;

  var minute = today.getMinutes();
  if(minute<10)minute = "0"+minute;

  var second = today.getSeconds();
  if(second<10)second = "0"+second;

  document.getElementById("clock").innerHTML = 
  hour+":"+minute+":"+second;

  garage.testOn(today.getTime())

  dryer.testOn(today.getTime())

  washer.testOn(today.getTime())

  backdoor.testOn(today.getTime())

  living.testOn(today.getTime())

  dining.testOn(today.getTime())

  kitchen.testOn(today.getTime())

  frontdoor.testOn(today.getTime())

  bathroom.testOn(today.getTime())

  desklamp.testOn(today.getTime())

  floorlamp.testOn(today.getTime())
}

function createTimes(elt){
  document.getElementById("timeSettings").innerHTML = 
  "<label for=\"" + elt.id + "start\">Start time for the " + elt.innerHTML + ":</label> <input type=\"time\" id=\"start\" name=\"" + elt.id + "start\"><br> <br>"
  document.getElementById("timeSettings").innerHTML += 
  "<label for=\"" + elt.id + "end\">End time for the " + elt.innerHTML + ":</label> <input type=\"time\" id=\"end\" name=\"" + elt.id + "end\"> <input type=\"submit\" onclick=\"displayTime()\">"
}

function displayTime(){
  sessionStorage.setItem(document.getElementById("start").name, document.getElementById("start").value);
  sessionStorage.setItem(document.getElementById("end").name, document.getElementById("end").value);
}

function loadTime(){
  var currentDate = new Date();

  // for(i = 0; i < 22; i++){

  // }

  // Checking for null variables and creating objects for each appliance I'm so sorry
  if(sessionStorage.getItem("1start") != null && sessionStorage.getItem("1end") != null){
    garage = new Appliance(1);
    garage.passTime(sessionStorage.getItem("1start"), sessionStorage.getItem("1end"));
  }

  if(sessionStorage.getItem("2start") != null && sessionStorage.getItem("2end") != null){
    dryer = new Appliance(2);
    dryer.passTime(sessionStorage.getItem("2start"), sessionStorage.getItem("2end"));
  }

  if(sessionStorage.getItem("3start") != null && sessionStorage.getItem("3end") != null){
    washer = new Appliance(3);
    washer.passTime(sessionStorage.getItem("3start"), sessionStorage.getItem("3end"));
  }

  if(sessionStorage.getItem("4start") != null && sessionStorage.getItem("4end") != null){
    backdoor = new Appliance(4);
    backdoor.passTime(sessionStorage.getItem("4start"), sessionStorage.getItem("4end"));
  }

  if(sessionStorage.getItem("5start") != null && sessionStorage.getItem("5end") != null){
   living = new Appliance(5);
    living.passTime(sessionStorage.getItem("5start"), sessionStorage.getItem("5end"));
  }

  if(sessionStorage.getItem("6start") != null && sessionStorage.getItem("6end") != null){
    dining = new Appliance(6);
    dining.passTime(sessionStorage.getItem("6start"), sessionStorage.getItem("6end"));
  }

  if(sessionStorage.getItem("7start") != null && sessionStorage.getItem("7end") != null){
    kitchen = new Appliance(7);
    kitchen.passTime(sessionStorage.getItem("7start"), sessionStorage.getItem("7end"));
  }

  if(sessionStorage.getItem("8start") != null && sessionStorage.getItem("8end") != null){
    frontdoor = new Appliance(8);
    frontdoor.passTime(sessionStorage.getItem("8start"), sessionStorage.getItem("8end"));
  }

  if(sessionStorage.getItem("9start") != null && sessionStorage.getItem("9end") != null){
    bathroom = new Appliance(9);
    bathroom.passTime(sessionStorage.getItem("9start"), sessionStorage.getItem("9end"));
  }

  if(sessionStorage.getItem("10start") != null && sessionStorage.getItem("10end") != null){
    desklamp = new Appliance(10);
    desklamp.passTime(sessionStorage.getItem("10start"), sessionStorage.getItem("10end"));
  }

  if(sessionStorage.getItem("11start") != null && sessionStorage.getItem("11end") != null){
    floorlamp = new Appliance(11);
    floorlamp.passTime(sessionStorage.getItem("11start"), sessionStorage.getItem("11end"));
  }

}





