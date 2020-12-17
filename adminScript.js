showForm = (buttontype) => {
  var summary = `<div class = "gridItem"><label style='font-size:15px; text-color: black;'>Summary:</label><textarea name = "Summary"></textarea></div>`;
  if (buttontype !== "buttonadd") {
    summary = "";
  }

  document.getElementById(
    "content"
  ).innerHTML = `<div class = "main" id = "main">
   <div class="gridItem">
   <form name = "AdminForm" id = "addForm" >
   <div class = "gridItem"><label style='font-size:15px; text-color: black;'>Movie Name:</label><input type='text' name = "MovieName"></div>
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
   <div class = "gridItem"><input id = "sub" type = 'button' value ='Submit' name="${buttontype}"></div>
   <div class = "gridItem"><input id = "backbutton" type = 'button' value = 'Back' onclick = "goBack()"></div></form></div>


   <div class = "gridItem"><form name = "ListForm" id = "nicelist" >${createList()}</form></div></div>
   `;
  document.getElementById("main").style.display = "grid";
  document.getElementById("main").style.gridAutoFlow = "column";
  document.getElementById("main").style.justifyItems = "center";
  document.getElementById("main").style.gridColumnGap = "5rem";
  goBack = () => {
    window.location = "http://127.0.0.1:5500/admin.html";
  };

  document.getElementById("sub").onclick = changeData;
  document.getElementById("addForm").style.width = "350px";
  document.getElementById("addForm").style.height = "300px";
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

  document.getElementById("nicelist").style.width = "500px";
  document.getElementById("nicelist").style.height = "300px";
  document.getElementById("nicelist").style.backgroundColor =
    "rgba(252, 87, 87, 0.8)";
  document.getElementById("nicelist").style.border = "0.35em solid";
  document.getElementById("nicelist").style.borderRadius = "20px";
  document.getElementById("nicelist").style.display = "grid";
  document.getElementById("nicelist").style.gridTemplateColumns = "auto";
  document.getElementById("nicelist").style.gridTemplateRows =
    "50px 50px 50px 50px 50px";
  document.getElementById("nicelist").style.justifyContent = "center";
  document.getElementById("nicelist").style.justifyItems = "end";
  document.getElementById("nicelist").style.alignItems = "center";
};

changeData = () => {
  buttontype = document.getElementById("sub").name;
  validator = validateForm();
  if (buttontype === "buttonadd") {
    if (validator) {
      let moviename = document.forms["AdminForm"]["MovieName"].value;
      let saloons = document.forms["AdminForm"]["Saloons"].value;
      let date = document.forms["AdminForm"]["Date"].value;
      let time = document.forms["AdminForm"]["Time"].value;
      let summary = document.forms["AdminForm"]["Summary"].value;

      sessionStorage.setItem(
        sessionStorage.length,
        JSON.stringify({
          name: moviename,
          saloons: saloons,
          date: date,
          time: time,
          summary: summary,
        })
      );
      console.log({
        name: moviename,
        saloons: saloons,
        date: date,
        time: time,
        summary: summary,
      });

      myobject = JSON.parse(sessionStorage.getItem(sessionStorage.length - 1));
    }
  } else {
    let key = null;
    let moviename = document.forms["AdminForm"]["MovieName"].value;
    let saloons = document.forms["AdminForm"]["Saloons"].value;
    let date = document.forms["AdminForm"]["Date"].value;
    let time = document.forms["AdminForm"]["Time"].value;

    for (item in sessionStorage) {
      console.log(sessionStorage[item]);
      if (typeof sessionStorage[item] === "string") {
        if (
          JSON.parse(sessionStorage[item]).name == moviename &&
          JSON.parse(sessionStorage[item]).saloons == saloons &&
          JSON.parse(sessionStorage[item]).date == date &&
          JSON.parse(sessionStorage[item]).time == time
        ) {
          key = item;
        }
      }
    }
    sessionStorage.removeItem(key);
  }
  showForm(buttontype);
};

function validateForm() {
  buttontype = document.getElementById("sub").name;

  if (buttontype === "buttonadd") {
    let moviename = document.forms["AdminForm"]["MovieName"];
    let salon = document.forms["AdminForm"]["Saloons"];
    let date = document.forms["AdminForm"]["Date"];
    let time = document.forms["AdminForm"]["Time"];
    let summary = document.forms["AdminForm"]["Summary"];

    // Check if another saloon exists
    mylist = [];
    for (item in sessionStorage) {
      if (
        typeof sessionStorage[item] === "string" &&
        sessionStorage[item] !== "true"
      ) {
        mylist.push(sessionStorage[item]);
      }
    }

    for (item in mylist) {
      x = JSON.parse(mylist[item]);
      if (x.saloons == salon.value) {
        alert(
          "This saloon is occupied please select another saloon or remove the movie in this saloon."
        );
        return false;
      }
    }

    // Check if another saloon exists  end

    if (moviename.value == "") {
      window.alert("Please enter movie name.");
      moviename.focus();
      return false;
    }
    const saloons = ["Salon 1", "Salon 2", "Salon 3", "Salon 4", "Salon 5"];
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
  } else {
    let moviename = document.forms["AdminForm"]["MovieName"];
    let salon = document.forms["AdminForm"]["Saloons"];
    let date = document.forms["AdminForm"]["Date"];
    let time = document.forms["AdminForm"]["Time"];

    if (moviename.value == "") {
      window.alert("Please enter movie name.");
      moviename.focus();
      return false;
    }
    const saloons = ["Salon 1", "Salon 2", "Salon 3", "Salon 4", "Salon 5"];
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
    return true;
  }
}

createList = () => {
  mylist = [];
  for (item in sessionStorage) {
    if (
      typeof sessionStorage[item] === "string" &&
      sessionStorage[item] !== "true"
    ) {
      mylist.push(sessionStorage[item]);
    }
  }
  table = `</br><table>
          <colgroup span="4">
        </colgroup>
        <tr>
        <th>Movie Name</th>
        <th>Salon Number</th>
        <th>Date</th>
        <th>Time</th>
      </tr>`;
  let temp = null;
  for (item in mylist) {
    x = JSON.parse(mylist[item]);
    table += `<tr>`;
    table += `<td>${x.name}</td><td>${x.saloons}</td><td>${x.date}</td><td>${x.time}</td>`;
    table += `</tr>`;
  }
  table += `</table>`;
  return table;
};
