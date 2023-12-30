// 1. Rewrite the following code using a ternary operator:
// let result;
// if (score >= 80) {
//     result = "Pass";
// } else {
//     result = "Fail";
// }

// let score = 80;
// let result = score>=80 ? "Pass" : "Fail"; 
// console.log(result);


// 2. How does the optional chaining operator (?.) work, and how can it be used to access nested properties of an object?

// let user ={
//     profile : {
//         name : "Malahim",
//         age : 20,
//         address: {
//             city : "Karachi",
//             zipcode : 74600,
//         }
//     }
// }
// let cityname = user?.profile?.address?.country;
// console.log(cityname);



// 3. Compare the for...in loop and the for...of loop in terms of their use cases and the types of values they iterate over.

// const obj = {
//     a : 1,
//     b : 2,
//     c : 3
// }
// for (const key in obj) {
//     console.log(key);
//     console.log(obj[key]);
// }

// 4. Define a function calculateAverage that takes an array of numbers as an argument and returns the average value.

// function calculateAverage(num){
//     if(num.length === 0){
//         return 0;
//     }
//     const sum = num.reduce((acc, currentValue) => acc + currentValue,0);
//         const average = sum / num.length;
//         return average;
// }

// let average = calculateAverage([24,60,50,30,10]);
// console.log(`The Average value is : ${average}`);


// 5. Explain the concept of "closures" in JavaScript and provide an example of their practical use.

// let func = (func1) => {
//     func1 = () => {
//     return func;
//     }
// }

// console.log(func);

    

// 6. Create an object named student with properties name, age, and grades. Add a method calculateAverage that calculates the average of the grades.

// const student = {
//     name : "Malahim Ansari",
//     age : 20,
//     grades: [85, 90, 78, 92, 88],

//     calculateAverage: function() {
//         let sum = this.grades.reduce((acc, grade) => acc + grade, 0);
//         let average = sum / this.grades.length;
//         return average.toFixed(2);
//       }
//     };
//     let averageGrade = student.calculateAverage();
//     console.log(`The average grade of ${student.name} is: ${averageGrade}`);


// 7. How can you clone an object in JavaScript and also give one example each deep copy, shallow copy, and reference copy

// Shallow copy
// let originalObject = {
//     name: 'John',
//     age: 25,
//     details: {
//       city: 'New York',
//       country: 'USA'
//     }
//   };
//   let shallowCopy = Object.assign({}, originalObject);
//   shallowCopy.name = 'Alice';
//   shallowCopy.details.city = 'San Francisco'; 
//   console.log('Original Object:', originalObject);
//   console.log('Shallow Copy:', shallowCopy);


//   Deep Copy
// let originalObject = {
//     name: 'John',
//     age: 25,
//     details: {
//       city: 'New York',
//       country: 'USA'
//     }
//   };
// let deepCopy = JSON.parse(JSON.stringify(originalObject));
// deepCopy.name = 'Alice';
// deepCopy.details.city = 'San Francisco';
// console.log('Original Object:', originalObject);
// console.log('Deep Copy:', deepCopy);


// reference copy

// let originalObject = {
//     name: 'John',
//     age: 25,
//   };
  
//   let referenceCopy = originalObject;
  
//   referenceCopy.name = 'Alice';
  
//   console.log('Original Object:', originalObject);
//   console.log('Reference Copy:', referenceCopy);


// 8. Write a loop that iterates over an array of numbers and logs whether each number is even or odd, using a ternary operator.

// const arr = [1,3,2,5,4,6,8];
// arr.forEach(element => {
//     let msg = element % 2 === 0 ? "Even" : "Odd";
//     console.log(`${element} is ${msg}`);
// });

// 9. Describe the differences between the for loop, while loop, and do...while loop in JavaScript. When might you use each?

// for(let i = 0; i < 5; i++){
//     //code execute
// }   

// let i = 0;
// while(i<=5){
//     //code execute
//     i++;
// }

// let j = 0;
// do{
//     //code execute
//     j++;
// }
// while(j<5);


// 10. Provide an example of using optional chaining within a loop to access a potentially missing property of an object.


// let users = [
//     { name: 'Alice', details: { age: 25 } },
//     { name: 'Bob', details: { /* age property is missing */ } },
//     { name: 'Charlie' /* details property is missing */ }
//   ];

// for (let user of users) {
//     let age = user?.details?.age;
//     if(age !== undefined){
//         console.log(`${user.name} age is ${age}`);
//     }
//     else{
//         console.log(`${user.name} does not have an age specified`);
//     }
// }


// 11. Write a for...in loop that iterates over the properties of an object and logs each property name and value.

// let obj = {
//     name : "Malahim" ,
//     age : 20 ,
//     city : "Karachi"
// }

// for(let key in obj ){
//     console.log(`${obj[key]}`);
// }