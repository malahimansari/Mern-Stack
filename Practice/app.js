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

// const num = [1,4,5,7,8,9,2,6];
// const sum = num.reduce((acc, cur) => (cur %2 === 0) ? acc + cur : acc, 0);
// console.log(sum);


// 5. *Find and Modify:*
//    - Q: Given an array of objects with 'id' properties, use the find method to locate an object with a specific 'id' and update its 'status' property to 'completed'.

// const users = [
//     {id : 1, name : "Malahim", status : "Pending"},
//     {id : 2, name : "Danish", status : "Pending"},
//     {id : 3, name : "Fatima", status : "In Progress"},
//     {id : 4, name : "Shayan", status : "Completed"},
//     {id : 5, name : "Ayesha", status : "In Progress"}
// ];
// const search = 3;
// const users_update = users.find(user => user.id === search);
// (users_update) ? users_update.status = "Completed" : "";
// console.log(users);


// 6. *Chaining Methods:*
//    - Q: Create a chain of array methods to find the average of all positive numbers in an array of mixed integers and return the result rounded to two decimal places.


// const integers = [3,4,-5,0,1,20,-8,1];
// const positiveNumbers = integers.filter(num => num > 0);
// const average = (positiveNumbers.reduce((acc, cur) => acc + cur, 0) / positiveNumbers.length).toFixed(2);
// console.log(average); 


// 7. *Conditional Filtering:*
//    - Q: Implement a function that takes an array of objects with 'age' properties and returns an array of those who are adults (age 18 and above) using the filter method.


const user = [
    {name : 'Malahim', age : 16},
    {name : 'Shani', age : 18},
    {name : 'Shahzaib', age : 20},
    {name : 'Danish', age : 17},
];
const adults = user.filter(person => person.age >= 18);
console.log(adults);