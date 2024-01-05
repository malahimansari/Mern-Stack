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


// const user = [
//     {name : 'Malahim', age : 16},
//     {name : 'Shani', age : 18},
//     {name : 'Shahzaib', age : 20},
//     {name : 'Danish', age : 17},
// ];
// const adults = user.filter(person => person.age >= 18);
// console.log(adults);


// 8. *Advanced Sorting:*
//    - Q: Sort an array of strings based on their lengths in ascending order. If two strings have the same length, maintain their relative order in the sorted array.


// const stringsArray = ['apple', 'banana', 'orange', 'kiwi', 'grape'];
// stringsArray.sort((a,b) => {
//     if(a.length === b.length){
//         return 0;
//     }
//     else{
//         return a.length - b.length;
//     }
// });
// console.log(stringsArray);


// 9. *Nested Array Operations:*
//    - Q: Given an array of arrays containing numbers, use a combination of array methods to flatten the structure and then calculate the sum of all the numbers.


// const arr = [[1,2],[3,4],[4,5,6],[7,8,9,2]];
// const flatten = arr.reduce((acc, cur) => {
//     return acc.concat(cur);
// }, []);

// const sum = flatten.reduce((acc, cur) => {
//     return acc + cur;
// });
// console.log(sum);


// 10. *Error Handling with Find:*
//     - Q: Modify the find method to handle the scenario where the desired element is not found, returning a custom default object instead.


// const array = [{ id: 1, name: 'Daniyal' }, { id: 2, name: 'Danish' }, { id: 3, name: 'Sharjeel' }];
// const findById = (id) => {
//     const defaultObject = {id: -1, name : 'Not Found'};
//     const foundObject = array.find(item => item.id === id);
//     return foundObject || defaultObject;
// }
// console.log(findById(4));


// 11. *Map Method:*
//    - Q: How does the map method work in JavaScript, and can you provide an example of when you might use it to manipulate an array of objects?


// const products = [
//     { name: 'Laptop', price: 500 },
//     { name: 'Mobile', price: 300 },
//     { name: 'Watch', price: 40 }
// ];
// const reudcePrices = products.map(item => {
//     const reudcePrice = item.price * 0.9;
//     return {...item, price: reudcePrice};
// })
// console.log(reudcePrices);


// 12. *Filter Method:*
//    - Q: Explain the purpose of the filter method. Provide an example where you use filter to extract elements from an array based on a specific condition.


// Filter Method is used to create an new array containing elements from the orginial array
// that passed a specific condition defined by a provided callback function

// const numbers = [5, 12, 7, 8, 15, 20, 11];
// const evenNumbers = numbers.filter(num => num%2 === 0);
// console.log(evenNumbers);


// 13. *Sort Method:*
//    - Q: Discuss the default behavior of the sort method for strings and numbers. How would you use a custom comparison function to sort an array of objects by a specific property?


// const books = [
//     { title: 'ABX', author: 'J.D. Salinger', year: 1951 },
//     { title: '1200', author: 'Johnssss', year: 1950 },
//     { title: 'ABC', author: 'Harper Lee', year: 1960 },
//     { title: '1984', author: 'George Orwell', year: 1949 }
// ];
// books.sort((a, b) => {
//     const titleA = a.title.toLowerCase();
//     const titleB = b.title.toLowerCase();
//     if (titleA < titleB) {
//         return -1;
//       }
//       if (titleA > titleB) {
//         return 1;
//       }
//       return 0;
// });
// console.log(books);


// 14. *Reduce Method:*
//    - Q: Describe the purpose of the reduce method and provide an example where you use it to compute a single value from an array of numbers.


const numbers = [3,1,5,6,30];
const sum = numbers.reduce((acc, cur) => {
    return acc + cur;
}, 0);

console.log(sum);