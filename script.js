showAddForm = () => {
  document.getElementById(
    "buttonadd"
  ).innerHTML = `<form><label style='font-size:13px; text-color: black;'>Movie Name:</label><input type='text'> </br>
    <label style='font-size:13px;'>Choose Salon:</label>
     <input list='salonlar' name='browser'> <datalist id='salonlar'> 
     <option value='Salon 1'>
     <option value='Salon 2'>
     <option value='Salon 3'>
     <option value='Salon 4'>
     <option value='Salon 5' </datalist>`;

  const button = document.getElementById("buttonadd");
  button.disabled = true;
};

showRemoveForm = () => {};
