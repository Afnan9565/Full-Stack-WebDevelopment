// Question 1
let num = 35;
if(num%10 === 0){
    console.log("Good")
}
else{
    console.log("Bad")
}

// Question 2
let userName = prompt("Enter your Name");
let userAge = prompt("Enter your age");
let output = `${userName} is ${userAge} years old`;
alert(output);

// Question 3
let quarter = 1;
switch(quarter){
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
if((str[0]==="a" || str[0]==="A") && str.length > 5){
    alert("Golden String");
}
else{
    alert("Not a Golden String");
}

// Question 5
// To be solved

// Question 6
let num1 = "63"
let num2 = "43"

if(num1[num1.length - 1] === num2[num2.length - 1]){
    console.log("Last digits are same")
}
else{
    console.log("Last Digits are not same")
}