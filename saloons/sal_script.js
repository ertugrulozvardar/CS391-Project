var seatList = [];
var full_seats = [];

function onStart() {
  salon_name = document.getElementById('perde').getAttribute('name').toString();
  key = salon_name + localStorage.clickcount;
  for (let i = 0; i < localStorage.length; i++) {
    if (localStorage.key(i).startsWith(salon_name)) {
      globalThis.full_seats.push(localStorage[localStorage.key(i)].split(','));
    }
  }
  globalThis.full_seats = [].concat(...globalThis.full_seats);
  window.setTimeout(assign_seat, 40);
}

function changeData() {
  buttontype = document.getElementById('sub').name;
  validator = validateForm();
  if (buttontype === 'buttonadd_seat_one') {
    if (validator) {
      let seat_name = document.forms['AdminForm']['koltuk'].value;
      let seat_no = document.forms['AdminForm']['numara'].value;
      let name_surname = document.forms['AdminForm']['name_surname'].value;

      let seat_val = seat_name + seat_no;

      localStorage.setItem(
        localStorage.length,
        JSON.stringify({
          saloon_type: 'Saloon 1',
          seat: seat_val,
          customer: name_surname,
        })
      );
      console.log({
        saloon_type: 'Saloon 1',
        seat: seat_val,
        customer: name_surname,
      });

      myobject = JSON.parse(localStorage.getItem(localStorage.length - 1));
      window.alert('Seat has been assigned');
    }
  } else if (buttontype === 'buttonadd_seat_two') {
    if (validator) {
      let seat_name = document.forms['AdminForm']['koltuk'].value;
      let seat_no = document.forms['AdminForm']['numara'].value;
      let name_surname = document.forms['AdminForm']['name_surname'].value;

      let seat_val = seat_name + seat_no;

      localStorage.setItem(
        localStorage.length,
        JSON.stringify({
          saloon_type: 'Saloon 2',
          seat: seat_val,
          customer: name_surname,
        })
      );
      console.log({
        saloon_type: 'Saloon 2',
        seat: seat_val,
        customer: name_surname,
      });

      myobject = JSON.parse(localStorage.getItem(localStorage.length - 1));
      window.alert('Seat has been assigned');
    }
  } else if (buttontype === 'buttonadd_seat_three') {
    if (validator) {
      let seat_name = document.forms['AdminForm']['koltuk'].value;
      let seat_no = document.forms['AdminForm']['numara'].value;
      let name_surname = document.forms['AdminForm']['name_surname'].value;

      let seat_val = seat_name + seat_no;

      localStorage.setItem(
        localStorage.length,
        JSON.stringify({
          saloon_type: 'Saloon 3',
          seat: seat_val,
          customer: name_surname,
        })
      );
      console.log({
        saloon_type: 'Saloon 3',
        seat: seat_val,
        customer: name_surname,
      });

      myobject = JSON.parse(localStorage.getItem(localStorage.length - 1));
      window.alert('Seat has been assigned');
    }
  } else if (buttontype === 'buttonadd_seat_four') {
    if (validator) {
      let seat_name = document.forms['AdminForm']['koltuk'].value;
      let seat_no = document.forms['AdminForm']['numara'].value;
      let name_surname = document.forms['AdminForm']['name_surname'].value;

      let seat_val = seat_name + seat_no;

      localStorage.setItem(
        localStorage.length,
        JSON.stringify({
          saloon_type: 'Saloon 4',
          seat: seat_val,
          customer: name_surname,
        })
      );
      console.log({
        saloon_type: 'Saloon 4',
        seat: seat_val,
        customer: name_surname,
      });

      myobject = JSON.parse(localStorage.getItem(localStorage.length - 1));
      window.alert('Seat has been assigned');
    }
  } else if (buttontype === 'buttonadd_seat_five') {
    if (validator) {
      let seat_name = document.forms['AdminForm']['koltuk'].value;
      let seat_no = document.forms['AdminForm']['numara'].value;
      let name_surname = document.forms['AdminForm']['name_surname'].value;

      let seat_val = seat_name + seat_no;

      localStorage.setItem(
        localStorage.length,
        JSON.stringify({
          saloon_type: 'Saloon 5',
          seat: seat_val,
          customer: name_surname,
        })
      );
      console.log({
        saloon_type: 'Saloon 5',
        seat: seat_val,
        customer: name_surname,
      });

      myobject = JSON.parse(localStorage.getItem(localStorage.length - 1));
      window.alert('Seat has been assigned');
    }
  }
}

function validateForm() {
  // buttontype = document.getElementById("sub").name;

  let seat_name = document.forms['AdminForm']['koltuk'];
  let seat_no = document.forms['AdminForm']['numara'];
  let name_surname = document.forms['AdminForm']['name_surname'];

  if (seat_name.value == '') {
    window.alert('Please select a seat name.');
    seat_name.focus();
    return false;
  }

  if (seat_no.value == '') {
    window.alert('Please select a valid seat number.');
    seat_no.focus();
    return false;
  }

  if (name_surname.value == '') {
    window.alert('Please enter your name and surname to register for a seat.');
    time.focus();
    return false;
  }

  return true;
}

document.getElementById('main').style.display = 'grid';
document.getElementById('main').style.gridAutoFlow = 'column';
document.getElementById('main').style.justifyItems = 'center';
document.getElementById('main').style.gridColumnGap = '5rem';

document.getElementById('addForm').style.width = '350px';
document.getElementById('addForm').style.height = '300px';
document.getElementById('addForm').style.backgroundColor =
  'rgba(252, 87, 87, 0.8)';
document.getElementById('addForm').style.border = '0.35em solid';
document.getElementById('addForm').style.borderRadius = '20px';
document.getElementById('addForm').style.display = 'grid';
document.getElementById('addForm').style.gridTemplateColumns = 'auto';
document.getElementById('addForm').style.gridTemplateRows =
  '50px 50px 50px 50px 50px';
document.getElementById('addForm').style.justifyContent = 'center';
document.getElementById('addForm').style.justifyItems = 'end';
document.getElementById('addForm').style.alignItems = 'center';

document.getElementById('nicelist').style.width = '500px';
document.getElementById('nicelist').style.height = '300px';
document.getElementById('nicelist').style.backgroundColor =
  'rgba(252, 87, 87, 0.8)';
document.getElementById('nicelist').style.border = '0.35em solid';
document.getElementById('nicelist').style.borderRadius = '20px';
document.getElementById('nicelist').style.display = 'grid';
document.getElementById('nicelist').style.gridTemplateColumns = 'auto';
document.getElementById('nicelist').style.gridTemplateRows =
  '50px 50px 50px 50px 50px';
document.getElementById('nicelist').style.justifyContent = 'center';
document.getElementById('nicelist').style.justifyItems = 'end';
document.getElementById('nicelist').style.alignItems = 'center';

function chooseSeat(buttonId) {
  color = window.getComputedStyle(document.getElementById(buttonId))
    .backgroundColor;
  id = document.getElementById('perde').getAttribute('name').toString();
  console.log(id);
  if (color == 'rgb(0, 128, 0)') {
    globalThis.seatList.push(buttonId);
    console.log(seatList);
    document.getElementById(buttonId).style.backgroundColor = 'red';
  } else {
    globalThis.seatList.splice(globalThis.seatList.indexOf(buttonId), 1);
    console.log(seatList);
    document.getElementById(buttonId).style.backgroundColor = 'rgb(0, 128, 0)';
  }
}

function submitSeat() {
  if (localStorage.clickcount) {
    localStorage.clickcount = Number(localStorage.clickcount) + 1;
  } else {
    localStorage.clickcount = 1;
  }
  salon = document.getElementById('perde').getAttribute('name').toString();
  list = globalThis.seatList;
  localStorage.setItem(salon + '_' + localStorage.clickcount, list);
  location.reload();
}

function assign_seat() {
  for (var i = 0; i < globalThis.full_seats.length; i++) {
    document.getElementById(globalThis.full_seats[i]).style.backgroundColor =
      'red';
    document.getElementById(globalThis.full_seats[i]).disabled = true;
  }
}
