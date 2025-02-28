/*
Given an object with various properties, write a function that returns an array of the object’s keys using Object.keys().
*/

let person = {
    name: "Rafi",
    age: 22,
    roll: "web developer",
    city:"Noida",
    Tech:"Mern"
}

function extractKey(obj){
    return Object.keys(obj)

}

console.log(extractKey(person))