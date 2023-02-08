//Find the average of an array of numbers

// declare the array
//loop through the array
//sum the elements as it loops through
// store the from n the total variable
// Divide the total from the length of the array

let arr = [2, 3, 8, 7, 5, 8];
let sum = 0;
let len = arr.length;

for (let i = 0; i < len; i++) {
  sum += arr[i];
}

let average = sum / len;
console.log(average);
