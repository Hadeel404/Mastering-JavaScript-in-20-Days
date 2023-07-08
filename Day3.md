# Day 3: 

This README file summarizes the JavaScript lesson on Quiz Project & Quiz Project Functions.


## Lesson Summary
the file of the project is in the html file QUIZ.

## Coding Exercises

### [Return a Value from a Function with Return]()

#### My Solution

```javascript
// Only change code below this line

function timesFive(num) {
  return num*5;
}
```
### [Global Scope and Functions](https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/basic-javascript/global-scope-and-functions)
#### My Solution
```javascript
function fun1() {
  // Assign 5 to oopsGlobal Here
  oopsGlobal=5; 
}

```
### [Local Scope and Functions]()
#### My Solution
```javascript
function myLocalScope() {
  'use strict'; // you shouldn't need to edit this line
  var myVar;
  console.log(myVar);
}
myLocalScope();

// Run and check the console
// myVar is not defined outside of myLocalScope
console.log(myVar);

// Now remove the console log line to pass the test

```
### [Global vs. Local Scope in Functions](https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/basic-javascript/global-vs--local-scope-in-functions)
#### My Solution
```javascript
function myOutfit() {
  // Only change code below this line
  
  var outerWear="sweater";
  
  // Only change code above this line
  return outerWear;
}
```
### [Stand in Line](https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/basic-javascript/stand-in-line)
#### My Solution
```javascript
function nextInLine(arr, item) {
  // Your code here
  arr.push(item);
  var item=arr.shift(item);
  return item;  // Change this line
}

// Test Setup
var testArr = [1,2,3,4,5];

// Display Code
console.log("Before: " + JSON.stringify(testArr));
console.log(nextInLine(testArr, 6)); // Modify this line to test
console.log("After: " + JSON.stringify(testArr));

```
