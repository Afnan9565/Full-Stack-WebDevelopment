// Question 1
let num = 35;
if (num % 10 === 0) {
  console.log("Good");
} else {
  console.log("Bad");
}

// Question 2
let userName = prompt("Enter your Name");
let userAge = prompt("Enter your age");
let output = `${userName} is ${userAge} years old`;
alert(output);

// Question 3
let quarter = 1;
switch (quarter) {
  case 1:
    console.log("January, February, March");
    break;
  case 2:
    console.log("April, May, June");
    break;
  case 3:
    console.log("July, August, September");
    break;
  case 4:
    console.log("October, November, December");
    break;
  default:
    console.log("Invalid Quarter");
}

// Question 4
// Golden String Problem
let str = prompt("Enter string");
if ((str[0] === "a" || str[0] === "A") && str.length > 5) {
  alert("Golden String");
} else {
  alert("Not a Golden String");
}

// Question 5

let no1 = prompt("Enter number");
let no2 = prompt("Enter number");
let no3 = prompt("Enter number");

if (no1 > no2) {
  if (no1 > no3) {
    alert(`${no1} is the biggest number`);
  } else if (no1 < no3) {
    alert(`${no3} is the biggest number`);
  }
} else if (no2 > no3) {
  if (no2 > no1) {
    alert(`${no2} is the biggest number`);
  }
  if (no2 < no1) {
    alert(`${no1} is the biggest number`);
  }
} else if (no2 > no1) {
  if (no2 > no3) {
    alert(`${no2} is the biggest number`);
  }
  if (no2 < no3) {
    alert(`${no3} is the biggest number`);
  }
}

// Question 6
let num1 = 63;
let num2 = 43;

if (num1 % 10 === num2 % 10) {
  console.log("Last digits are same");
} else {
  console.log("Last digits are not same");
}
