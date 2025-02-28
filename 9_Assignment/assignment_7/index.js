/*
Write a function that takes an object with properties width and height and returns the area of a rectangle (width * height).
*/
let obj = {
    width: 5,
    height: 10
}
function rectangle(area){
    return area.width * area.height;

}

console.log(rectangle(obj));