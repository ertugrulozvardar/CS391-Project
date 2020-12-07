let saloon_one_string = "";
let saloon_two_string = "";
let saloon_three_string = "";
let saloon_four_string = "";
let saloon_five_string = "";


mylist = [];
for (item in sessionStorage) {
  if (
    typeof sessionStorage[item] === "string" &&
    sessionStorage[item] !== "true"
  ) {
    mylist.push(sessionStorage[item]);
  }
}
