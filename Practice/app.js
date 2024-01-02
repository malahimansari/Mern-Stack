// 1. *Map Transformation:*
//    - Q: Given an array of integers, use the map method to square each element and return a new array with the squared values

// const arr = [2,4,5,8,9];
// const square = arr.map((array) => {
//     return array * array;
// });
// console.log(square);


// 2. *Filter and Map Combination:*
//    - Q: Take an array of strings, filter out the ones with a length less than 5, and then capitalize the remaining strings using the map method.

let arr = ["car","bus","aeroplane","bike","helicopter"];

let filter_array = arr.filter(e => e.length >=5)
.map(e => e.charAt(0).toUpperCase() + e.slice(1));

console.log(filter_array);