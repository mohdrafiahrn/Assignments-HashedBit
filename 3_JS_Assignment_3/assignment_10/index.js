// Q10) Write a function to reverse a string.
// Input - Hello
// Outpur - olleH


function reverseStr (str){
    let rev = str.split("").reverse().join("")
    return rev
}

console.log(reverseStr("Hello"));