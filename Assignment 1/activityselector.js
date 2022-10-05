function NZ() {
  console.log("test NZ")
  document.getElementById("activitydisplay").style.display = "flex";
  document.getElementById("location").innerHTML = "New Zealand";

  document.getElementById("checkboxes").innerHTML = 
  "<input type=\"checkbox\"> City Tours </input><br>" 

  document.getElementById("checkboxes").innerHTML += 
  "<input type=\"checkbox\"> Sports </input><br>"
  
  document.getElementById("checkboxes").innerHTML += 
  "<input type=\"checkbox\"> Cycling </input><br>" 
  
  document.getElementById("checkboxes").innerHTML += 
  "<input type=\"checkbox\"> Museums </input><br>" 
  
  document.getElementById("checkboxes").innerHTML += 
  "<input type=\"checkbox\"> Boating </input>";
}

function Maldives() {
  console.log("test Maldives")
  document.getElementById("activitydisplay").style.display = "flex";
  document.getElementById("location").innerHTML = "Maldives, South Asia";

  document.getElementById("checkboxes").innerHTML = 
  "<input type=\"checkbox\"> Museums </input><br>" 

  document.getElementById("checkboxes").innerHTML += 
  "<input type=\"checkbox\"> Sailing </input><br>"
  
  document.getElementById("checkboxes").innerHTML += 
  "<input type=\"checkbox\"> Beach </input><br>" 
  
  document.getElementById("checkboxes").innerHTML += 
  "<input type=\"checkbox\"> Hiking </input><br>" 
  
  document.getElementById("checkboxes").innerHTML += 
  "<input type=\"checkbox\"> Boating </input>";
}

function Venice() {
  console.log("test Venice")
  document.getElementById("activitydisplay").style.display = "flex";
  document.getElementById("location").innerHTML = "Venice, Italy";

  document.getElementById("checkboxes").innerHTML = 
  "<input type=\"checkbox\"> Museums </input><br>" 

  document.getElementById("checkboxes").innerHTML += 
  "<input type=\"checkbox\"> Theatre </input><br>"
  
  document.getElementById("checkboxes").innerHTML += 
  "<input type=\"checkbox\"> Parks and Recreation </input><br>" 
  
  document.getElementById("checkboxes").innerHTML += 
  "<input type=\"checkbox\"> City Tours </input>" 
  
}

function Cancun() {
  console.log("test Cancun")
  document.getElementById("activitydisplay").style.display = "flex";
  document.getElementById("location").innerHTML = "Cancun";

  document.getElementById("checkboxes").innerHTML = 
  "<input type=\"checkbox\"> Parks and Recreation </input><br>" 

  document.getElementById("checkboxes").innerHTML += 
  "<input type=\"checkbox\"> Beaches </input><br>"
  
  document.getElementById("checkboxes").innerHTML += 
  "<input type=\"checkbox\"> Boating </input><br>" 
  
  document.getElementById("checkboxes").innerHTML += 
  "<input type=\"checkbox\"> Snorkeling </input>" 
  
}

function validateForm() {
  let fname = document.forms["inputform"]["fname"].value;
  let lname = document.forms["inputform"]["lname"].value;
  let email = document.forms["inputform"]["email"].value;
  let phone = document.forms["inputform"]["phone"].value;
  let quantity = document.forms["inputform"]["quantity"].value;
  let date = document.forms["inputform"]["date"].value;

  if (fname === "" || lname === "" || email === "" || phone === "" || quantity === "" || date === ""){
    document.getElementById("error").innerHTML = "<p>Empty Form Detected</p>";
  }
  else if (isChecked() == false){
    document.getElementById("error").innerHTML = "<p>No activities selected</p>";
  }
  else if (/\D/.test(phone)){
    document.getElementById("error").innerHTML = "<p>Phone number contains letters</p>";
  }
  else{
    document.getElementById("error").innerHTML = "<p>Clear :)</p>";
  }
}

function isChecked() {
  let checkboxes = document.querySelectorAll('input[type=checkbox]');
  let checkboxLength = checkboxes.length;
  for (let i = 0; i < checkboxLength; i++) {
    if (checkboxes[i].checked) return true;
  }

  return false;
}