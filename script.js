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

// const memoize = (func) => {
//   const cache = {};

//   return (...args) => {
//     const key = JSON.stringify(args);
//     if (cache[key]) {
//       console.log("Fetching from cache...");
//       return cache[key];
//     } else {
//       const result = func(...args);
//       cache[key] = result;
//       return result;
//     }
//   };
// };

// const factorial = (n) => {
//   if (n <= 1) {
//     // Base case
//     return n;
//   }
//   return n * factorial(n - 1);
// };

// const memoizedFactorial = memoize(factorial);
// console.log(memoizedFactorial(5));
// console.log(memoizedFactorial(5));

// 32.	Create a recursive function to calculate the Fibonacci sequence up to n terms.

// 22.	Create a program to find the second largest number in an array.
// Throttling function
// const throttle = (func, delay) => {
//   let isThrottled = false; // To track whether function is being throttled

//   return (...args) => {
//     if (isThrottled) return; // If function is throttled, do nothing

//     func(...args); // Otherwise, call the function

//     isThrottled = true; // Set throttled to true

//     setTimeout(() => {
//       isThrottled = false; // Reset throttled after delay
//     }, delay); // Wait for the delay time before allowing next call
//   };
// };

// // API call function
// const fetchPosts = () => {
//   console.log("API Call Triggered");
//   fetch("https://jsonplaceholder.typicode.com/posts")
//     .then((response) => response.json())
//     .then((data) => {
//       console.log("Data fetched: ", data.length); // Display number of posts
//     })
//     .catch((error) => console.error("Error fetching data: ", error));
// };

// // Wrap the fetchPosts function with throttling, allow 1 call every 2 seconds
// const throttledFetchPosts = throttle(fetchPosts, 2000);

// // Test the throttled function with setInterval
// setInterval(() => {
//   throttledFetchPosts(); // Triggering API call every 500ms
// }, 500);

// const applyToEachElement = (arr, callback) => {
//   const result = [];
//   for (let i = 0; i < arr.length; i++) {
//     result.push(callback(arr[i], i, arr));
//   }
//   return result;
// };

// // arr
// const number = [1, 2, 3, 4, 5, 6];
// // Callback function to square each number
// const divideByMAx = (num, index, arr) => {
//   const max = Math.max(...arr);
//   return (num / max).toFixed(2);
// };

// const squareNumaber = applyToEachElement(number, divideByMAx);
// console.log(squareNumaber);

// const HOF = (callback) => {
//   return function (arr) {
//     let result = [];
//     for (let i = 0; i < arr.length; i++) {
//       result.push(callback(arr[i], i));
//     }
//     return result;
//   };
// };

// const arr = [1, 2, 3, 4, 5];

// const increment = (num, i) => num + i;

// const returnFunction = HOF(increment);
// console.log(returnFunction(arr));

// Create a function that accepts an array of functions and executes them sequentially.

// 41.	Write a program to reverse the words in a sentence but not the sentence itself.

// 42.	Use a regex to validate if a string is a valid email address.

// .	Create a program to capitalize the first letter of each word in a string.

// .	Create a function to count the frequency of each word in a string.

// 51.	Write a script to dynamically create 10 buttons on a webpage.

// 2. Advanced Loops (10 Questions)
// 	11.	Write a nested loop to generate a multiplication table (1 to 10).
// 	12.	Use a for...in loop to iterate through the properties of an object.
// 	13.	Write a program to calculate the sum of all even numbers between 1 and 100 using a for loop.
// 	14.	Use a for...of loop to iterate over a string and count the vowels.
// 	15.	Create a loop that breaks out when a specific condition is met (e.g., number divisible by 7).
// 	16.	Write a loop that skips numbers divisible by 3 but logs all others up to 20.
// 	17.	Use a do...while loop to prompt the user until they enter a positive number.
// 	18.	Write a nested loop to generate a pyramid pattern:

//    *
//   ***
//  *****
// *******

// 	19.	Use a loop to reverse a string "JavaScript".
// 	20.	Write a program to calculate the product of all numbers in an array using a loop.

//21
// const arr1 = [1, 2, 2, 3, 3, 4, 5, 6];
// const arr2 = [4, 5, 6, 7, 8];

// const mergeArr = [...arr1, ...arr2];
// const uniqueArr = [...new Set(mergeArr)];
// console.log(uniqueArr);

//22.	Create a program to find the second largest number in an array.

// let arr = [1, 2, 3, 4, 5, 6, 7];

// const soretdArray = arr.sort((a, b) => b - a);
// const second = arr[1];
// console.log(second);

// let largest = -Infinity;
// let secondLargest = -Infinity;
// for (let i = 0; i < arr.length; i++) {
//   if (arr[i] > largest) {
//     secondLargest = largest;
//     largest = arr[i];
//   } else if (arr[i] > secondLargest && arr[i] !== largest) {
//     secondLargest = arr[i];
//   }
// }

// console.log(secondLargest)

// 23.	Write a function that removes all falsy values from an array.

// const arr = [null, undefined, 0, false, NaN, "", 3, 4, 6, "jhv"];

// const removeFalsy = (arr) => {
//   return arr.filter(Boolean);
// };

// const removeFalsy = (arr) => {
//   let result = [];
//   for (let word of arr) {
//     if (word) {
//       result.push(word);
//     }
//   }
//   return result;
// };
// const newVal = removeFalsy(arr);
// console.log(newVal);

//we can do this using for ,forEach,map,forof
// const arr = [1, 2, 3, "Siddharth", 0, false, undefined];
// const removeFalse = (arr) => {
//   let result = [];
//   arr.forEach((elem) => {
//     if (elem) {
//       result.push(elem);
//     }
//   });
//   return result;
// };

// const value = removeFalse(arr);
// console.log(value);

// let arr = [1, 2, 3, 4, 5, 6, 7, , 89];

// const sum = arr.reduce((acc, curVal) => acc + curVal, 0);
// console.log(sum)

// 25.	Write a program that rotates an array to the left by n positions.

//from left ✅✅
// let arr = [1, 2, 3, 4, 5, 6, 7];

// const rotateNLeft = (arr, k) => {
//   k = k % arr.length;
//   const cutedArr = arr.slice(0, k);
//   const remaingArr = arr.slice(k);
//   return [...remaingArr, ...cutedArr];
// };
// const rotatearr = rotateNLeft(arr, 2);
// console.log(rotatearr);

//from rigth ✅✅

// const arr = [1, 2, 3, 4, 5, 6, 7, 8];

// const rotateRight = (arr, k) => {
//   k = k % arr.length;
//   const cutedArr = arr.slice(-k);
//   const remainign = arr.slice(0, arr.length - k);

//   return [...cutedArr, ...remainign];
// };
// const answer = rotateRight(arr, 2);

// console.log(answer)

// 26.	Use .find() to locate the first even number in an array.✅

// let arr = [1, 3, 5, 7, 8, 2];
// let evenNum = arr.find((elem) => elem % 2 === 0);
// console.log(evenNum);

// 27.	Create a function that flattens a nested array (e.g., [1, [2, [3]]] → [1, 2, 3]). ✅✅

let nestedArr = [1, [2, [3, [5, [7, [9]]]]]];

//using flat(infinity)✅
// const flatArray = (arr) => {
//   return arr.flat(Infinity);
// };
// console.log(flatArray(nestedArr));

//using recersive✅
// const flatArr = (arr) => {
//   let flatarr = [];

//   arr.forEach((elem) => {
//     if (Array.isArray(elem)) {
//       flatarr = flatarr.concat(flatArr(elem));
//     } else {
//       flatarr.push(elem);
//     }
//   });

//   return flatarr; // Return the flattened array
// };

// console.log(flatArr(nestedArr)); // Output: [1, 2, 3, 5, 7, 9]

// let nestedArr = [1, [2, [3, [5, [7, [9]]]]]];

// const flatArr = (arr) => {
//   return JSON.parse('[' + JSON.stringify(arr).replace(/\[|\]/g,"")+ ']');
// };

// console.log(flatArr(nestedArr));

//3rd is using regex✅

// const flatArray = (arr) => {
//   return JSON.parse("[" + JSON.stringify(arr).replace(/\[|\]/g, "") + ']');
// };
// console.log(flatArray(nestedArr));

// 28.	Write a program that counts how many times each element appears in an array.✅

// let arr = [1, 1, 2, 2, 3, 3, "sidd", [],[],[],[]];

// const countElemAppearence = (arr) => {
//   let count = {};

//   arr.forEach((elem) => {
//     let key = JSON.stringify(elem);

//     if (count[key]) {
//       count[key]++;
//     } else {
//       count[key] = 1;
//     }
//   });

//   return count;
// };

// console.log(countElemAppearence(arr));

// 30.	Sort an array of objects by a specific property
// const arrayOfObj = [
//   {
//     name: "Siddharth",
//     age: 22,
//   },
//   {
//     name: "Siddharth",
//     age: 20,
//   },
//   {
//     name: "Siddharth",
//     age: 21,
//   },
// ];

// const sortedObj = arrayOfObj.sort((a, b) => a.age - b.age);
// console.log(sortedObj)

// 31.	Write a function that returns another function to calculate the power of a number.✅

// const firstFunc = (a) => {
//   return (secondfunc = (b) => {
//     return a ** b;
//   });
// };
// const HOF = firstFunc(2)
// console.log(HOF(3))

// 32.	Create a recursive function to calculate the Fibonacci sequence up to n terms.

// const Fibonacci = (n) => {
//   if (n <= 1) return n;
//   return Fibonacci(n - 1) + Fibonacci(n - 2);
// };

// const fabSequence = (n) => {
//   let sequence = [];
//   for (let i = 0; i < n; i++) {
//     sequence.push(Fibonacci(i));
//   }
// return sequence;
// };
// console.log(fabSequence(10));

// 33.	Write a function that uses closures to create a counter.

// const clouser = () => {
//   let count = 0;
//   return {
//     increment: () => {
//       return count++;
//     },
//     decrement: () => {
//       return count--;
//     },
//     getCount: () => {
//       console.log(count);
//     },
//   };
// };

// const count = clouser();
// count.decrement();
// count.getCount();

// 34.	Create a function that memoizes the result of a computation.

// const factorial = (num) => {
//   let fact = 1;
//   for (let i = 1; i <= num; i++) {
//     fact *= i;
//   }
//   return fact;
// };

// const memoize = (func) => {
//   let cache = {};
//   return (...args) => {
//     let key = JSON.stringify(args);
//     if (cache[key]) {
//       console.log("Fetching from cache");
//       return cache[key];
//     } else {
//       console.log("Computing new result");
//       let result = func(...args);
//       cache[key] = result;
//       return result;
//     }
//   };
// };
// const memoizalbe = memoize(factorial);
// console.log(memoizalbe(5));
// console.log(memoizalbe(5));

// const debounce = (func, delay) => {
//   let timer;
//   return () => {
//     clearTimeout(timer);
//     timer = setTimeout(() => {
//       func();
//     }, delay);
//   };
// };

// const handleCLick = () => {
//   console.log("Button is clicked");
// };

// const handleDEbounce = debounce(handleCLick, 3000);
// handleDEbounce();

// const arr = [1, 1, 2, 3, 4, 4, "1", "1", 3, 5, 5, [], {}];

// const count = (arr) => {
//   let count = {};
//   arr.forEach((elem) => {
//     const key = JSON.stringify(elem);
//     if (count[key]) {
//       count[key]++;
//     } else {
//       count[key] = 1;
//     }
//   });
//   return count;
// };
// console.log(count(arr));

// Implement a function that throttles an API call.✅

// const throttle = (func, delay) => {
//   let isThrottled = false;
//   return (...args) => {
//     if (isThrottled) return;
//     func(...args);
//     isThrottled = true;
//     setTimeout(() => {
//       isThrottled = false;
//     }, delay);
//   };
// };

// const fetchPosts = () => {
//   console.log("API Call Triggered");
//   fetch("https://jsonplaceholder.typicode.com/posts")
//     .then((response) => response.json())
//     .then((data) => {
//       console.log("Data fetched: ", data.length);
//     })
//     .catch((error) => console.error("Error fetching data: ", error));
// };
// const throttledFetchPosts = throttle(fetchPosts, 2000);
// setInterval(() => {
//   throttledFetchPosts();
// }, 500);

// 21.	Write a program to merge two arrays and remove duplicate values.

// 	22.	Create a program to find the second largest number in an array.

// 	23.	Write a function that removes all falsy values from an array.

// const arr = [NaN, undefined, "", false, 0, null, 1, 2, 3, 4, "sidd"];
// const removeFalsy = (arr) => {
//   const result = [];
//   arr.forEach((elem) => {
//     if (elem) {
//       result.push(elem);
//     }
//   });
//   return result;
// };
// console.log(removeFalsy(arr));

// 	24.	Use .reduce() to find the total sum of numbers in an array.

// // 	25.	Write a program that rotates an array to the left by n positions.
// const arr = [1, 2, 3, 4, 5, 6];

// const rotate = (arr, k) => {
//   const cutedArr = arr.slice(0, k);
//   const remaining = arr.slice(k);
//   return [...remaining, ...cutedArr];
// };
// console.log(rotate(arr, 2));

// 	26.	Use .find() to locate the first even number in an array.
// 	27.	Create a function that flattens a nested array (e.g., [1, [2, [3]]] → [1, 2, 3]).
// const nestedArray = [1, [2, [3, [4, [5]]]]];
// const flatArr = (arr) => {
//   let flatArray = [];
//   arr.forEach((elem) => {
//     if (Array.isArray(elem)) {
//       flatArray = flatArray.concat(flatArr(elem));
//     } else {
//       flatArray.push(elem);
//     }
//   });
//   return flatArray;
// };
// console.log(flatArr(nestedArray));
// 	28.	Write a program that counts how many times each element appears in an array.

// 	29.	Use .some() and .every() to check conditions on an array.
// 	30.	Sort an array of objects by a specific property.

// const memoize = (addTwoNum) => {
//   const cache = {};
//   return (...args) => {
//     console.log("feching exiting Data");
//     const key = JSON.stringify(args);
//     if (cache[key]) {
//       return cache[key];
//     } else {
//       console.log("calculating new Data");
//       const result = addTwoNum(...args);
//       cache[key] = result;
//       return result;
//     }
//   };
// };

// const addTwoNum = (a, b) => {
//   return a + b;
// };

// const memoizable = memoize(addTwoNum);
// console.log(memoizable(2, 2));
// console.log(memoizable(2, 2));
// console.log(memoizable(2, 2));
// console.log(memoizable(2, 2));

// 55.	Create a function to toggle the visibility of an element.

// const container = document.querySelector(".container")
// const btn = document.querySelector(".btn")
// btn.addEventListener("click",()=>{

//   container.classList.toggle("hidden")
// })

// const debounce = (func, delay) => {
//   let timer;
//   return () => {
//     clearTimeout(timer);
//     timer = setTimeout(() => {
//       func();
//     }, delay);
//   };
// };

// const handleCLick = () => {
//   console.log("Click");
// };

// const debouncing = debounce(handleCLick, 3000);
// debouncing();

// const btn = document.querySelector(".btn");
// btn.addEventListener("click", () => {
//   document.querySelector(".container").classList.toggle("container");
// });

// const allPtag = document.querySelectorAll(".para");
// console.log(allPtag.length);

// 35.	Write a function to debounce a button click event.
// answer=>
// const debounce = (func, delay) => {
//   let timer;
//   return () => {
//     clearTimeout(timer);
//     timer = setTimeout(() => {
//       func();
//     }, delay);
//   };
// };
// const handleClick = () => {
//   console.log("Btn is clicked");
// };

// const debouncedHandleClick = debounce(handleClick, 1000);

// const button = document.getElementById("myButton");
// button.addEventListener("click", debouncedHandleClick);

// let arr = [1, 1, 2, 2, 3, 4, 56, 7, 8, 9, 55, 55];
// const checkOccurence = (arr) => {
//   let count = {};
//   arr.forEach((elem) => {
//     elem in count ? count[elem]++ : (count[elem] = 1);
//   });
//   return count;
// };
// console.log(checkOccurence(arr));
