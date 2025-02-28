/*
Write a function that takes two objects as arguments and merges them into one object using Object.assign(). Return the new object.
*/

function assignObject(x, y){
    return Object.assign({}, x, y)
}

let obj_1 = {
    name: "Rafi",
    age: 23,
    roll: "web developer"
}

let obj_2 = {
    city: "noida",
    tech: "Mern stack"
}

console.log(assignObject(obj_1, obj_2))