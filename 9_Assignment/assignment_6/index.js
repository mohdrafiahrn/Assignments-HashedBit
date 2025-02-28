/*
Create an object called person with properties for name, age, and occupation. Write a function that logs a greeting message using these properties.
*/

let person = {
    name: "Rafi",
    age: 22,
    occupation: "Web developer"
}

function greetPerson(obj){
    console.log(`Hello, My name is ${obj.name}. I am ${obj.age} years old and I work as a ${obj.occupation}.`);

}
greetPerson(person)
