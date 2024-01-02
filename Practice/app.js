// 1. *Map Transformation:*
//    - Q: Given an array of integers, use the map method to square each element and return a new array with the squared values

const arr = [2,4,5,8,9];
const square = arr.map((array) => {
    return array * array;
});
console.log(square);