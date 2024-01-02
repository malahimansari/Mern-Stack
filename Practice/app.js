// 1. *Map Transformation:*
//    - Q: Given an array of integers, use the map method to square each element and return a new array with the squared values

// const arr = [2,4,5,8,9];
// const square = arr.map((array) => {
//     return array * array;
// });
// console.log(square);


// 2. *Filter and Map Combination:*
//    - Q: Take an array of strings, filter out the ones with a length less than 5, and then capitalize the remaining strings using the map method.

// let arr = ["car","bus","aeroplane","bike","helicopter"];

// let filter_array = arr.filter(e => e.length >=5)
// .map(e => e.charAt(0).toUpperCase() + e.slice(1));

// console.log(filter_array);


// 3. *Sorting Objects:*
//    - Q: Given an array of objects with a 'price' property, use the sort method to arrange them in descending order based on their prices.

// let products = [{name : "Product 1", price : 20},{name : "Product 2", price : 40},{name : "Product 3", price : 10},{name : "Product 4", price : 35}];
// let price = products.sort((a,b) => b.price - a.price);
// console.log(price); 

// 4. *Reduce for Aggregation:*
//    - Q: Use the reduce method to find the total sum of all even numbers in an array of integers.

const num = [1,4,5,7,8,9,2,6];
const sum = num.reduce((acc, cur) => (cur %2 === 0) ? acc + cur : acc, 0);
console.log(sum);