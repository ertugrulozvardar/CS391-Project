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