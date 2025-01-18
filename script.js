// 4. Arrays

//create an array with 5 element
// const arr = [1, 2, 3, 4, 5];

//insert an element in this array in end with push() method
// arr.push();
// console.log(arr);

//delete an last  element in this array  with pop() method

// arr.pop();
// console.log(arr);

//Iterate over an array and print each element.
// const arr = [1, 2, 3, 4, 5, 6, 7];

// arr.forEach((elem) => {
//   console.log(elem);
// });

//•	Find the length of an array.

// const arr = [11, 22, 33, 44, 55, 66, 77, 88];

// console.log(arr.length);

//function

// Create a function to add two numbers and return the result.

// let a = 10;
// let b = 20;

// const addTwoNum = (a, b) => {
//   return a + b;
// };

// console.log(addTwoNum(a, b));

//	Write a function that accepts a string and returns its uppercase version.

// let str = "hello";
// const upperCase = (str) => {
//   return str.split("").forEach(()=>{
//     console.log(Element.toUpperCase())
//   })

// };

// console.log(upperCase(str));

// questions for practice

// Q-1: make a function which takes a vlaue and return that value with 2 added on it

// let a = 2;
// function addTwo(a) {
//   return a + 2;
// }
// console.log(addTwo(a));

//Q-2:  make a function

// let num = prompt("hey give me a number");
// function addTwoIfNumber(a) {
//   if (isNaN(num) === true) {
//     console.log("Please pass a number");
//   } else {
//     return a + 2;
//   }
// }
// console.log(addTwoIfNumber(num));

// Q-3

// for (let i = 1; i <= 20; i++) {
//   console.log(i)
// }

//Q-4

// for (let i = 0; i < 20; i++) {
//   if (i == 12 || i == 13 || i == 14) {
//     continue;
//   } else {
//     console.log(i);
//   }
// }

// Q:5

// let arr = [1, 2, 3, 4, 5, 6];

// arr.forEach((elem) => {
//   console.log(elem);
// });

// Q:6

// let arr2 = [1, 2, 3, 4, "hii", "Sidd"];

// arr2.forEach((elem) => {
//   if (typeof elem === "number") {
//     console.log(elem);
//   }
// });

//
// let num = prompt("Please enter a number");
// if (num === null || num.trim() === "") {
//   console.log("Please enter a number");
// } else {
//   let numNum = Number(num);
//   if (isNaN(numNum) === true) {
//     console.log("Please enter a number");
//   } else if (numNum >= 0) {
//     console.log("Number is Positive");
//   } else {
//     console.log("Number is negative");
//   }
// }

//Use if...else if to classify a grade as “A”, “B”, or “Fail”.

// let grade = "A B";
// let userInput = "C";
// if (grade.includes(userInput)) {
//   console.log("Grade ");
// } else {
//   console.log("Fail");
// }

//Create a switch case for selecting a fruit price.

// let fruit = "banana";

// switch (fruit) {
//   case "apple":
//     console.log("price is 20");
//     break;

//   case "banana":
//     console.log("Price is 30");
//     break;

//   default:
//     console.log("price is free");
// }

//Create an object to store information about a car (e.g., make, model, year).

// const obj = {
//   make: "ambaani",
//   model: "2021",
//   year:"2021"
// };

// console.log(obj.make)
// obj.name="Sidd"

// console.log(obj)

// let str = "hello ";
// let str2 = "hello2";

// let str3 = str + str2;
// console.log(str3);

//String Manipulation

// let str = "Siddharth"

// console.log(str.slice(0,5))

// /Replace a word in a string using .replace().

// let str = "Siddharth";
// console.log(str.replace("Siddharth", "Sidd"));

//9 Event Handling (Basic DOM Interaction)

// Create a button and log a message when it is clicked.

// const btn = document.querySelector(".btn");
// btn.addEventListener("click", () => {
//   btn.style.backgroundColor = "red";
// });

//Change the background color of a div on a mouseover event.

// const bdy = document.querySelector(".bdy");
// console.log(bdy);
// bdy.addEventListener("mouseenter", () => {
//   bdy.style.backgroundColor = "red";
// });

// const btn = document.querySelector(".btn");

// btn.addEventListener("click", () => {
//   btn.classList.toggle("btn2");
// });

//Range-Based Tasks

// Print all even numbers between 1 and 20.

// for (let num = 1; num < 21; num++) {
//   if (num % 2 === 0) {
//     console.log(num);
//   }
// }

// let num1 = prompt("Number 1");
// let num2 = prompt("Number 2");
// let num3 = prompt("Number 3");
// num1 = Number(num1);
// num2 = Number(num2);
// num3 = Number(num3);
// if (isNaN(num1) || isNaN(num2) || isNaN(num3)) {
//   console.log("All should be number");
// } else {
//   console.log(((num1 + num2 + num3) / 3).toFixed(2));
// }

// function sum() {
//   let sum = 0;

//   for (let i = 0; i < 101; i++) {
//     sum += i;
//   }
//   return sum;
// }
// console.log(sum());

// let str = "swachya bharat ka iraada kr liya hamne";

// console.log(str.length);
// let char = str.charAt(0) + str.charAt(37);
// console.log(char);

// let a = 5;
// let b = 10;
// c = a + b;
// console.log(c);

// let age = 25

// age = 30
// console.log(typeof age)

// let str = "Siddharth";
// console.log(str.slice());

// 88.	Write a program to convert the string "10" to a number and add 5 to it.
// answer=>

// Write a program to find the index of the first vowel in a string.

// Write a program to merge two sorted arrays into one sorted array

// let num = 1;
// for (let i = 0; i < 3; i++) {
//   let star = "";
//   for (let j = 0; j < num; j++) {
//     star += num + " ";
//     num++;
//   }
//   console.log(star);
// }

// 13.	Write a program to calculate the sum of all even numbers between 1 and 100 using a for loop.

// let n = 5; // Number of rows in the pyramid

// for (let i = 1; i <= n; i++) {
//   let row = "";

//   // Add spaces for centering
//   for (let j = 1; j <= n - i; j++) {
//     row += " ";
//   }

//   // Add stars
//   for (let k = 1; k <= 2 * i - 1; k++) {
//     row += "*";
//   }

//   console.log(row); // Print the row

// }

// 3. Arrays and Objects (10 Questions)
// 	21.	Write a program to merge two arrays and remove duplicate values.
// 	22.	Create a program to find the second largest number in an array.
// 	23.	Write a function that removes all falsy values from an array.
// 	24.	Use .reduce() to find the total sum of numbers in an array.
// 	25.	Write a program that rotates an array to the left by n positions.
// 	26.	Use .find() to locate the first even number in an array.
// 	27.	Create a function that flattens a nested array (e.g., [1, [2, [3]]] → [1, 2, 3]).
// 	28.	Write a program that counts how many times each element appears in an array.
// 	29.	Use .some() and .every() to check conditions on an array.
// 	30.	Sort an array of objects by a specific property.

// 22.	Create a program to find the second largest number in an array.

// 23.	Write a function that removes all falsy values from an array.

// function rotateLeftLogic(arr, n) {
//   let length = arr.length;

//   // Ensure n is within bounds of the array length
//   n = n % length;

//   for (let i = 0; i < n; i++) {
//     // Step 1: Store the first element
//     let firstElement = arr[0];

//     // Step 2: Shift all elements to the left
//     for (let j = 0; j < length - 1; j++) {
//       arr[j] = arr[j + 1];
//     }

//     // Step 3: Place the first element at the end
//     arr[length - 1] = firstElement;
//   }

//   return arr;
// }

// // Example:
// const arr = [1, 2, 3, 4, 5];
// const n = 2;

// console.log(rotateLeftLogic(arr, n));

// Write a function that returns another function to calculate the power of a number.

function debonce(func, delay) {
  let timer;
  console.log("Searching...");
  return (...args) => {
    clearTimeout(timer);
    timer = setTimeout(() => {
      func(...args);
    }, delay);
  };
}

const search = () => {
  console.log("Searching...");
};


debonce(search, 4000);
