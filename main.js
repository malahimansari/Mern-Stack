// 1. Question: Reverse a string without using the built-in reverse() method.

// let text = "Hello World";
// let reversed = "";
// for(let i= text.length - 1; i >= 0; i--){
//     reversed += text[i];
// }
// console.log(reversed);

// 2. Question: Count the number of vowels in a given string.

// function countVowels(str) {
//     str = str.toLowerCase();
//     const vowels = ['a', 'e', 'i', 'o', 'u'];
//     let vowelCount = 0;
//     for (let character of str) {
//       if (vowels.includes(character)) {
//         vowelCount++;
//       }
//     }
//     return vowelCount;
//   }
  
//   let string = 'Hello';
//   let result = countVowels(string);
//   console.log(`Number of vowels in "${string}": ${result}`);
  

// 3. Question: Convert the first letter of each word in a sentence to uppercase.

// function capitalizeWords(sentence) {
//     let words = sentence.split(' ');  
//     for (let i = 0; i < words.length; i++) {
//       words[i] = words[i].charAt(0).toUpperCase() + words[i].slice(1);
//     }  
//     let capitalizedSentence = words.join(' ');  
//     return capitalizedSentence;
//   }
//   let input = 'convert the first letter of each word in a sentence to uppercase';
//   let result = capitalizeWords(input);
//   console.log(`Original sentence: ${input}`);
//   console.log(`Capitalized sentence: ${result}`);
  

//   4. Question: Check if a string is a palindrome.

// function Palindrome(str) {
//     let j = str.length - 1;
//     for (let i = 0; i < str.length / 2; i++) {
//         if (str[i] != str[j]) {return `${str} : is not Palindrome`;}
//         j--;}
//     return `${str} : is Palindrome`;
// }
// let str1 = "racecar";
// let str2 = "pop";
// let str3 = "Hello";
// console.log(Palindrome(str1));
// console.log(Palindrome(str2));
// console.log(Palindrome(str3));


// 5. Question: Find the sum of all positive numbers in an array.

// function sumOfPositiveNumbers(arr) {
//     let sum = 0;
//     for (let i = 0; i < arr.length; i++) {
//       if (arr[i] > 0) {
//         sum += arr[i];
//       }
//     }
//     return sum;
//   }
//   let numbers = [3, 6, -1, 8, -5, 10, -2];
//   let result = sumOfPositiveNumbers(numbers);
//   console.log(`Sum of positive numbers in the array: ${result}`);
  

// 6. Question: Find the index of the first occurrence of a specific element in an array.

// function FirstOccurrence(arr, target) {
//     for (let i = 0; i < arr.length; i++) {
//       if (arr[i] === target) {
//         return i; 
//       }}
//     return -1;}
//   let elements = [10, 20, 30, 40, 50, 30, 70];
//   let targetElement = 30;
//   let resultIndex = FirstOccurrence(elements, targetElement);
//   if (resultIndex !== -1) {
//     console.log(`Index of the first occurrence of ${targetElement} is: ${resultIndex}`);
//   } else {
//     console.log(`${targetElement} is not found in the array.`);
//   }
  

// 7. Question: Remove all duplicates from an array without built-in methods.

// function removeDuplicates(arr) {
//     let array = [];
//     for (let i = 0; i < arr.length; i++) {
//       if (array.indexOf(arr[i]) === -1) {
//         array.push(arr[i]);
//       }}    
//     return array;}
//   let arrayWithDuplicates = [1, 2, 3, 2, 4, 5, 3, 6, 7, 7];
//   let resultArray = removeDuplicates(arrayWithDuplicates);
//   console.log('Array with duplicates:', arrayWithDuplicates);
//   console.log('Array after removing duplicates:', resultArray);


// 8. Question: Sort the array in ascending and descending without built-in methods.

// Ascending Order
// function sortAscending(arr) {
//     for (let i = 0; i < arr.length; i++) {
//       for (let j = i + 1; j < arr.length; j++) {
//         if (arr[i] > arr[j]) {
//           let temp = arr[i];
//           arr[i] = arr[j];
//           arr[j] = temp;
//         }
//       }
//     }
//     return arr;
//   }
//   let arrayToSortAscending = [6, 4, 9, 2, 1, 5, 8];
//   let sortedAscending = sortAscending(arrayToSortAscending);
//   console.log('Array sorted in ascending order:', sortedAscending);
  
// Descending Order

// function sortDescending(arr) {
//   for (let i = 0; i < arr.length; i++) {
//     for (let j = i + 1; j < arr.length; j++) {
//       if (arr[i] < arr[j]) {
//         let temp = arr[i];
//         arr[i] = arr[j];
//         arr[j] = temp;
//       }
//     }
//   }
//   return arr;
// }
// let arrayToSortDescending = [6, 4, 9, 2, 1, 5, 8];
// let sortedDescending = sortDescending(arrayToSortDescending);
// console.log('Array sorted in descending order:', sortedDescending);


// 9. Question: Print all even numbers between 1 and 20 using a while loop.

// let i = 1;
// while(i<=20){
//     while(i%2 == 0){
//     console.log(i);
//     i++;
//     }
//     i++;
// }


// 10. Question: Calculate the factorial of a number using a do-while loop.

// function calculateFactorial(number) {
//     let factorial = 1;
//     let i = 1;
//     if (number < 0) {
//       return 'Factorial undefined for negative numbers';
//     } else {
//       do {
//         factorial *= i;
//         i++;
//       } while (i <= number);
//       return factorial;
//     }
//   }
//   let num = 5;
//   let result = calculateFactorial(num);
//   console.log(`Factorial of ${num} is: ${result}`);
  

// 11. Question: Iterate through the properties of an object using a for-in loop.

// let person = {
//     firstName: 'Malahim',
//     lastName: 'Ansari',
//     age: 20,
//     email: 'malahim@gmail.com'
//   };
//   for (let property in person) {
//     console.log(`${property}: ${person[property]}`);
//   }


// 12. Question: Loop through an array using a for-of loop and double each element.

// function doubleArrayElements(arr) {
//     for (let i = 0; i < arr.length; i++) {
//       arr[i] *= 2;
//     }
//     return arr;
//   }
//     let numbers = [1, 2, 3, 4, 5];
//   doubleArrayElements(numbers);
//   console.log('Array after doubling each element:', numbers);
  
  
//   13. Question: Check if a number is even or odd and return a corresponding message.

// function checkEvenOrOdd(number) {
//     if (number % 2 === 0) {
//       return `${number} is even.`;
//     } else {
//       return `${number} is odd.`;
//     }
//   }
//   let num = 7;
//   let result = checkEvenOrOdd(num);
//   console.log(result);


// 14. Question: Find the maximum of three numbers using nested ternary operators.

// function findMaxOfThreeNumbers(a, b, c) {
//     let max = a > b ? (a > c ? a : c) : (b > c ? b : c);
//     return `The maximum of ${a}, ${b}, and ${c} is: ${max}`;
//   }  
//   let num1 = 10;
//   let num2 = 25;
//   let num3 = 15;
//   let result = findMaxOfThreeNumbers(num1, num2, num3);
//   console.log(result);
  


//   15. Question: Determine if a year is a leap year or not.


function isLeapYear(year) {
    if (year % 4 === 0) {
      return `${year} is a leap year.`;
    } else {
      return `${year} is not a leap year.`;
    }
  }
  let yearToCheck = 2024;  
  let result = isLeapYear(yearToCheck);
  console.log(result);
  