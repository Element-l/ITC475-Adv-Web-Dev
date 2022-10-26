function NZ() {
  console.log("test NZ")
  document.getElementById("activitydisplay").style.display = "flex";
  document.getElementById("locationselect").innerHTML = "<div> New Zealand </div>";
  document.getElementById("locationselect").innerHTML += "<input type=\"hidden\" id=\"location\" name=\"location\"  value=\"New Zealand\"></input>"
  document.getElementById("checkboxes").innerHTML = 
  "<input type=\"checkbox\" name=\"activity[]\" value=\"City Tours\"> City Tours </input><br>" 

  document.getElementById("checkboxes").innerHTML += 
  "<input type=\"checkbox\" name=\"activity[]\" value=\"Sports\"> Sports </input><br>"
  
  document.getElementById("checkboxes").innerHTML += 
  "<input type=\"checkbox\" name=\"activity[]\" value=\"Cycling\"> Cycling </input><br>" 
  
  document.getElementById("checkboxes").innerHTML += 
  "<input type=\"checkbox\" name=\"activity[]\" value=\"Museums\"> Museums </input><br>" 
  
  document.getElementById("checkboxes").innerHTML += 
  "<input type=\"checkbox\" name=\"activity[]\" value=\"Boating\"> Boating </input>";
}

function Maldives() {
  console.log("test Maldives")
  document.getElementById("activitydisplay").style.display = "flex";
  document.getElementById("locationselect").innerHTML = "<div name=\"location\" id=\"location\"> Maldives, South Asia </div>";
  document.getElementById("locationselect").innerHTML += "<input type=\"hidden\" id=\"location\" name=\"location\"  value=\"Maldives, South Asia\"></input>"
  document.getElementById("checkboxes").innerHTML = 
  "<input type=\"checkbox\" name=\"activity[]\" value=\"Museums\"> Museums </input><br>" 

  document.getElementById("checkboxes").innerHTML += 
  "<input type=\"checkbox\" name=\"activity[]\" value=\"Sailing\"> Sailing </input><br>"
  
  document.getElementById("checkboxes").innerHTML += 
  "<input type=\"checkbox\" name=\"activity[]\" value=\"Beach\"> Beach </input><br>" 
  
  document.getElementById("checkboxes").innerHTML += 
  "<input type=\"checkbox\" name=\"activity[]\" value=\"Hiking\"> Hiking </input><br>" 
  
  document.getElementById("checkboxes").innerHTML += 
  "<input type=\"checkbox\" name=\"activity[]\" value=\"Boating\"> Boating </input>";
}

function Venice() {
  console.log("test Venice")
  document.getElementById("activitydisplay").style.display = "flex";
  document.getElementById("locationselect").innerHTML = "<div name=\"location\" id=\"location\"> Venice, Italy </div>";
  document.getElementById("locationselect").innerHTML += "<input type=\"hidden\" id=\"location\" name=\"location\"  value=\"Venice, Italy\"></input>"
  document.getElementById("checkboxes").innerHTML = 
  "<input type=\"checkbox\" name=\"activity[]\" value=\"Museums\"> Museums </input><br>" 

  document.getElementById("checkboxes").innerHTML += 
  "<input type=\"checkbox\" name=\"activity[]\" value=\"Theatre\"> Theatre </input><br>"
  
  document.getElementById("checkboxes").innerHTML += 
  "<input type=\"checkbox\" name=\"activity[]\" value=\"Parks and Recreation\"> Parks and Recreation </input><br>" 
  
  document.getElementById("checkboxes").innerHTML += 
  "<input type=\"checkbox\" name=\"activity[]\" value=\"City Tours\"> City Tours </input>" 
  
}

function Cancun() {
  console.log("test Cancun")
  document.getElementById("activitydisplay").style.display = "flex";
  document.getElementById("locationselect").innerHTML = "<div name=\"location\" id=\"location\"> Cancun </div>";
  document.getElementById("locationselect").innerHTML += "<input type=\"hidden\" id=\"location\" name=\"location\"  value=\"Cancun\"></input>"
  document.getElementById("checkboxes").innerHTML = 
  "<input type=\"checkbox\" name=\"activity[]\" value=\"Parks and Recreation\"> Parks and Recreation </input><br>" 

  document.getElementById("checkboxes").innerHTML += 
  "<input type=\"checkbox\" name=\"activity[]\" value=\"Beaches\"> Beaches </input><br>"
  
  document.getElementById("checkboxes").innerHTML += 
  "<input type=\"checkbox\" name=\"activity[]\" value=\"Boating\"> Boating </input><br>" 
  
  document.getElementById("checkboxes").innerHTML += 
  "<input type=\"checkbox\" name=\"activity[]\" value=\"Snorkeling\"> Snorkeling </input>" 
  
}

function validateForm() {
  let fname = document.forms["inputform"]["fname"].value;
  let lname = document.forms["inputform"]["lname"].value;
  let email = document.forms["inputform"]["email"].value;
  let phone = document.forms["inputform"]["phone"].value;
  let quantity = document.forms["inputform"]["quantity"].value;
  let date = document.forms["inputform"]["date"].value;
  var location = document.getElementById("locationselect").innerText;
  

  if (fname === "" || lname === "" || email === "" || phone === "" || quantity === "" || date === ""){
    document.getElementById("error").innerHTML = "<p>Empty Form Detected</p>";
    return false;
  }
  else if (isChecked() == false){
    document.getElementById("error").innerHTML = "<p>No activities selected</p>";
    return false;
  }
  else if (/\D/.test(phone)){
    document.getElementById("error").innerHTML = "<p>Phone number contains letters</p>";
    return false;
  }
  else{
    document.getElementById("error").innerHTML = "<p>Clear :)</p>";
    document.getElementById("inputform").submit();
    return true;
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