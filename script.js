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
let num = prompt("Please enter a number");
if (num === null || num.trim() === "") {
  console.log("Please enter a number");
} else {
  let numNum = Number(num);
  if (isNaN(numNum) === true) {
    console.log("Please enter a number");
  } else if (numNum >= 0) {
    console.log("Number is Positive");
  } else {
    console.log("Number is negative");
  }
}
