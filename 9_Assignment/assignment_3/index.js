/*
Write a function that takes an array as an argument, adds a new element to the end of the array using push(), and then removes the last element using pop(). Return the modified array.
*/

function modifyArray(arr){
    arr.push("5")
    arr.pop()
    return arr 
}
let myArray = [1, 2, 3, 4];
console.log(modifyArray(myArray)); 
