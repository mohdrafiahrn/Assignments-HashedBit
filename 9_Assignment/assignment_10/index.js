/*
Create an array of numbers and write a function that uses the reduce() method to calculate the sum of all the numbers in the array.
*/


let arr = [5, 7, 8, 10, 12, 15, 20]

function sumOfArr(){
    return arr.reduce((acc, curr) => acc + curr , 0)
}

console.log(sumOfArr());