// Question 1:  JS Program to delete all occurences of element 'num' in a given array.
let arr = [1,2,3,4,5,6,2,3];
let num = 2;
for(let i = 0; i<arr.length; i++){
    if(arr[i] == num){
        arr.splice(i,1);
        
    }
}
console.log(arr);

// Question 2: JS Program to find number of digits in a number

let number = 287152;
let count = 0;
let copy = number;
while(copy > 0){
    count++
    copy = Math.floor(copy/10)
}

// Question 3: JS Program to find sum of digits in a number

let numb= 287152;
let sum = 0;
let newCopy = numb;
while(copy > 0){
    digit = numb % 10;
    sum += digit;
    copy = Math.floor(copy/10);
}

// Question 4: To find factorial of number
let n = 5;
let factorial = 1;
for(let i = 1; i <= 5; i++){
    factorial *= i;
}
console.log(factorial);

//Question 5: Find the largest number in an array with only positive numbers
let array = [2,5,10,4,2,7,1,9];
let largest = 0;
for (i=0; i < array.length; i++){
    if (array[i] > largest){
        largest = array[i];
    }
}
console.log(largest);