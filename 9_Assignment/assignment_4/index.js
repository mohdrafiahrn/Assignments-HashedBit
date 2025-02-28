/*
Create an array of numbers and write a function that uses the map() method to return a new array containing each number squared.
*/

let arr = [2, 6, 11, 12, 20]

let squareArr = arr.map((square)=>{
    return square * square
}) 

console.log(squareArr)