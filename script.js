showForm = (buttontype) => {
  var summary = `<div class = "gridItem"><label style='font-size:15px; text-color: black;'>Summary:</label><textarea name = "Summary"></textarea></div>`;
  if (buttontype !== "buttonadd") {
    summary = "";
  }

  document.getElementById(
    "main"
  ).innerHTML = `<form name = "AdminForm" id = "addForm" onsubmit="return validateForm()"><div class = "gridItem"><label style='font-size:15px; text-color: black;'>Movie Name:</label><input type='text' name = "MovieName"></div>
   <div class = "gridItem"><label style='font-size:15px;'>Choose Salon:</label>
   <input list='salonlar' name='Saloons'> <datalist id='salonlar'> 
   <option value='Salon 1'></option>
   <option value='Salon 2'></option>
   <option value='Salon 3'></option>
   <option value='Salon 4'></option>
   <option value='Salon 5' </option></datalist></div>
   <div class = "gridTime"><label style='font-size:15px; text-color: black;'>Date:</label><input type='date' name ="Date"></div>
   <div class = "gridItem"><label style='font-size:15px; text-color: black;'>Time:</label><input type='time' name = "Time"></div>
   ${summary}
   <div class = "gridItem"><id = "sub" input type = 'submit' value ='Submit' name="${buttontype}"></div>
   `;

  document.getElementById("addForm").style.width = "350px";
  document.getElementById("addForm").style.height = "300px";
  document.getElementById("addForm").style.marginLeft = "600px";
  document.getElementById("addForm").style.backgroundColor =
    "rgba(252, 87, 87, 0.8)";
  document.getElementById("addForm").style.border = "0.35em solid";
  document.getElementById("addForm").style.borderRadius = "20px";
  document.getElementById("addForm").style.display = "grid";
  document.getElementById("addForm").style.gridTemplateColumns = "auto";
  document.getElementById("addForm").style.gridTemplateRows =
    "50px 50px 50px 50px 50px";
  document.getElementById("addForm").style.justifyContent = "center";
  document.getElementById("addForm").style.justifyItems = "end";
  document.getElementById("addForm").style.alignItems = "center";
};

function validateForm() {
  var moviename = document.forms["AdminForm"]["MovieName"];
  var salon = document.forms["AdminForm"]["Saloons"];
  var date = document.forms["AdminForm"]["Date"];
  var time = document.forms["AdminForm"]["Time"];
  var summary = document.forms["AdminForm"]["Summary"];

  if (moviename.value == "") {
    window.alert("Please enter movie name.");
    moviename.focus();
    return false;
  }
  const saloons = ["Salon 1", "Salon 2", "Salon3", "Salon 4", "Salon 5"];
  if (salon.value == "" || !saloons.includes(salon.value)) {
    window.alert("Please enter Salon code.");
    salon.focus();
    return false;
  }

  if (date.value == "") {
    window.alert("Please enter a valid date.");
    date.focus();
    return false;
  }

  if (time.value == "") {
    window.alert("Please enter a valid time.");
    time.focus();
    return false;
  }

  if (summary.value == "") {
    window.alert("Please enter a summary.");
    password.focus();
    return false;
  }
  return true;
}

addSubmitListener = () => {
  var sub = document.getElementById("sub");
  sub.addEventListener("click", saveData, false);
};

saveData = () => {
  var moviename = document.getElementByName("MovieName").value;
  sessionStorage.setItem("movie", moviename);
};
window.addEventListener("load", addSubmitListener, false);
