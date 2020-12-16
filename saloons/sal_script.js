
  changeData = () => {
    buttontype = document.getElementById("sub").name;
    validator = validateForm();
    if (buttontype === "buttonadd_seat_one") {
      if (validator) {
        let moviename = document.forms["AdminForm"]["MovieName"].value;
        let saloons = document.forms["AdminForm"]["Saloons"].value;
        let date = document.forms["AdminForm"]["Date"].value;
        let time = document.forms["AdminForm"]["Time"].value;
        let summary = document.forms["AdminForm"]["Summary"].value;
  
        localStorage.setItem(
          localStorage.length,
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
  
        myobject = JSON.parse(localStorage.getItem(localStorage.length - 1));
      }
    } else {
      let key = null;
      let moviename = document.forms["AdminForm"]["MovieName"].value;
      let saloons = document.forms["AdminForm"]["Saloons"].value;
      let date = document.forms["AdminForm"]["Date"].value;
      let time = document.forms["AdminForm"]["Time"].value;
  
      for (item in localStorage) {
        console.log(localStorage[item]);
        if (typeof localStorage[item] === "string") {
          if (
            JSON.parse(localStorage[item]).name == moviename &&
            JSON.parse(localStorage[item]).saloons == saloons &&
            JSON.parse(localStorage[item]).date == date &&
            JSON.parse(localStorage[item]).time == time
          ) {
            key = item;
          }
        }
      }
      localStorage.removeItem(key);
    }


  };














  function validateForm() {
    buttontype = document.getElementById("sub").name;
  
    
  
  
  
    if (buttontype === "buttonadd") {
      let seat_name = document.forms["AdminForm"]["koltuk"];
      let seat_no = document.forms["AdminForm"]["numara"];
      let name_surname = document.forms["AdminForm"]["name_surname"];
  
      let seat_val = seat_name+seat_no
  
      // Check if another seat exists 
      mylist = [];
    for (item in localStorage) {
      if (
        typeof localStorage[item] === "string" &&
        localStorage[item] !== "true"
      ) {
        mylist.push(localStorage[item]);
      }
    }
  
    for (item in mylist) {
      x = JSON.parse(mylist[item]);
      if(x.seat == seat_val){
        alert("This seat is occupied please select another seat.")
        return false;
      }
    }
  
  
        // Check if another seat exists  end
  
  
  
      if (seat_name.value == "") {
        window.alert("Please select a seat name.");
        seat_name.focus();
        return false;
      }
  
      if (seat_no.value == "") {
        window.alert("Please select a valid seat number.");
        seat_no.focus();
        return false;
      }
  
      if (name_surname.value == "") {
        window.alert("Please enter your name and surname to register for a seat.");
        time.focus();
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

document.getElementById("main").style.display = "grid";
document.getElementById("main").style.gridAutoFlow = "column";
document.getElementById("main").style.justifyItems = "center";
document.getElementById("main").style.gridColumnGap = "5rem";

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

