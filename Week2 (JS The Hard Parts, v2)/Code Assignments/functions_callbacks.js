/* 
Question 1: Functions and Callbacks

Implement a JavaScript function called mapAsync that takes an array and a callback function.
The function should map each element of the array to a new value using the callback function asynchronously.
The final result should be returned as a Promise.
*/

function mapAsync (arr , callback ){
  return  Promise.all(arr.map(callback));
}

// calling and printing mapAsync function : 
mapAsync([1,2,3], input=>input+2)
    .then((res)=>console.log( res))

/*
Question 2: Call Stack and Recursion

Write a JavaScript function called sumRange that calculates the sum of all integers in a given range.
The function should use recursion to handle the calculation and demonstrate understanding of the call stack.
 */

function sumRange(first, last) {
    if (first === last) {
        return first;
    } else {
        return first + sumRange(first + 1, last);
    }
}

console.log(sumRange(1, 3)); // Output: 6 (1 + 2 + 3) where the function simulates the call stack.