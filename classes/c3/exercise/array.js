// Q1. Create an array of image source filenames. Use "image1.png", "image2.png", and "image3.png" as the array values.
var q1 = ["image1.png", "image2.png", "image3.png"];
console.log("Q1:", q1);
console.log("");

// Q2. Using the array from Question 1, store the first element of the array in variable q2.
var q2 = q1[0];
console.log("Q2:", q2);
console.log("");

// Q3. Get the length of the first array (number of elements in the array) and store it in variable q3
var q3 = q1.length;
console.log("Q3:", q3);
console.log("");

// Q4. Using the array from Question 1, store the last element of the array in variable q4.
var q4 = q1[q3-1];
console.log("Q4:", q4);
console.log("");

// Q5.
/* Create an array of numbers using 1, 2, 3, and 4 as values.
   Use a for loop, a forEach function or a map function to increase each 
   value by 1. You can either store each new value back in the original
   array, or in a new array -- your choice. The end result should be
   an array of numbers with values 2, 3, 4, and 5.
 */

// Original array
var nums = [1, 2, 3, 4];
nums.forEach(function (num, ind){
  nums[ind] = num + 1 
});
// Why isn't the original array altered? Not saved?
console.log("Q5.A:", nums);


// New array
var numbers = [1, 2, 3, 4];
var newNumbers = numbers.map(function(num) {
  return num + 1
});
console.log("Q5.B", numbers)
console.log("Q5.B1:", newNumbers);
console.log("");

// Q6.
/* Using the array from Question 5, find the average of the 
   numbers in the array (average = sum of all numbers/number 
   of numbers). Store the average in q6.
 */
var sum = 0;
numbers.forEach(function (num){
  sum += num
});

var q6 = sum / numbers.length
console.log("Q6:", q6)







