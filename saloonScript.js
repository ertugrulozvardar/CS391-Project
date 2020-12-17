let saloon_one_string = "";
let saloon_two_string = "";
let saloon_three_string = "";
let saloon_four_string = "";
let saloon_five_string = "";


let time_one_string = "";
let time_two_string = "";
let time_three_string = "";
let time_four_string = "";
let time_five_string = "";



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
    if(x.saloons == "Salon 1"){
        saloon_one_string = x.name;
        time_one_string = x.time;
    }else if(x.saloons == "Salon 2"){
        saloon_two_string = x.name;
        time_two_string = x.time;
    }else if(x.saloons == "Salon 3"){
        saloon_three_string = x.name;
        time_three_string = x.time;
    }else if(x.saloons == "Salon 4"){
        saloon_four_string = x.name;
        time_four_string = x.time;
    }else if(x.saloons == "Salon 5"){
        saloon_five_string = x.name;
        time_five_string = x.time;
    }

  }


document.getElementById("saloon_1").innerHTML = saloon_one_string;
document.getElementById("saloon_2").innerHTML = saloon_two_string;
document.getElementById("saloon_3").innerHTML = saloon_three_string;
document.getElementById("saloon_4").innerHTML = saloon_four_string;
document.getElementById("saloon_5").innerHTML = saloon_five_string;


if(time_one_string != ""){
  document.getElementById("time_1").innerHTML = "Time: "+time_one_string;
}

if(time_two_string != ""){
  document.getElementById("time_2").innerHTML = "Time: "+time_two_string;
}

if(time_three_string != ""){
  document.getElementById("time_3").innerHTML = "Time: "+time_three_string;
}

if(time_four_string != ""){
  document.getElementById("time_4").innerHTML = "Time: "+time_four_string;
}

if(time_five_string != ""){
  document.getElementById("time_5").innerHTML = "Time: "+time_five_string;}



