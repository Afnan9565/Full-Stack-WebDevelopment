// Question 1
let n = 2;
let arr = [45,"apple",67,"mango"];
let newArr = arr.slice(0,n);
    console.log(newArr);

// Question 2
let n1 = 3;
    let arr1 =  [45,"apple",67,"mango"];
let newArr1 = arr1. slice(arr1.length - n1 ,arr1.length);
        console.log(newArr1);

//Question 3
let str = prompt("Enter any string");
if(str.length === 0){
    alert("String is blank")
}
else{
    alert("String is not blank")
}

// Question 4
let string = "AfNaN AHmaD";
let index = 4;
if(string[index - 1].toLowerCase === string[index - 1]){
    alert(`String at index ${index} is in Lowercase`)
}
else{
    alert(`String at index ${index} is in Uppercase`)
} 
// Mistake here to be solved

// Question 5
let newString = prompt("Enter string");
console.log(`String without spaces ${newString}`);
let trimString = newString.trim()
console.log(`Trimmed String: ${trimString}`)

// Question 6
let numbers = [13,54,34,23,54,76,54,35,23,43,82,67];
let toFind = 34;

if(numbers.indexOf(toFind) === -1){
    console.log("String does not exists")
}
else{
    console.log("String exists");
}