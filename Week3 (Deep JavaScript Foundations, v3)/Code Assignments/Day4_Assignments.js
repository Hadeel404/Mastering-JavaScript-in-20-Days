/* 
ADVANCED SCOPE:

QUESTION #1

Given the following code snippet and explain what's happening.

for (var i = 0; i < 5; i++) {
    setTimeout(function() {
      console.log("value of [i] is: ", i);
    }, 100);
}
The current output is: "value of [i] is: 5" five times.

The output should be:

"value of [i] is: ", 0 "value of [i] is: ", 1 "value of [i] is: ", 2 "value of [i] is: ", 3 "value of [i] is: ", 4

Without changing anything in the for loop's code itself, provide a solution to fix it.

####### Solution and Explanation : ###############
*/
for (let i = 0; i < 5; i++) {
  setTimeout(function() {
    console.log("value of [i] is: ", i);
  }, 100);
}

/*

var has a function scope, not block scope.
When the setTimeout functions execute after 100 milliseconds,
they use the final value of i, which is 5, because the loop has already completed by then.

while by Using let it captures the value of i at each itteration, since let has a block scope,
means that it creates a separate lexical environment for each iteration of the loop.
_______________________________________________________________________________________________________________________________________
QUESTION #2

Given the following code snippet and explain what's happening.

for (let i = 0; i < 5; i++) {
   let array = [];
   array.push(i);
   console.log("Current array is: ", array)
}
The current output is:

"Current array is: [ 0 ]" "Current array is: [ 1 ]" "Current array is: [ 2 ]" "Current array is: [ 3 ]" "Current array is: [ 4 ]".

The output should be: "Current array is: [0, 1, 2, 3, 4]".

Provide a solution to fix it.

####### Solution and Explanation : ###############
*/
let array = []; // Move the array declaration outside of the loop

for (let i = 0; i < 5; i++) {
   array.push(i);
   console.log("Current array is: ", array);
}

/*
array is created inside each iteration of the for loop, so each iteration starts with an empty array.
Then, the current value of i is pushed into the array, resulting in arrays with single elements, since
the array created inside with each iteration has a block scope.
_______________________________________________________________________________________________________________________________________
QUESTION #3

Given the following code snippet and explain what's happening.

let functions = [];

for (var i = 0; i < 5; i++) {
  functions.push(() => {
    console.log("Current value of i is:", i);
  });
}

functions.forEach((func) => func());
The current output is:

"Current value of i is: 5" "Current value of i is: 5" "Current value of i is: 5" "Current value of i is: 5" "Current value of i is: 5"

The output should be:

"Current value of i is: 0" "Current value of i is: 1" "Current value of i is: 2" "Current value of i is: 3" "Current value of i is: 4"

Provide a solution to fix it.

####### Solution and Explanation : ###############

same reason as example one :  let and var scopes :
i is declared with var, which has function scope.
When the arrow functions are pushed into the functions array,
with closures all function has reference to the variable i.
so when the functions are executed, the loop has already finished,
so the functions get the final value of i (which is 5).

*/
let functions = [];

for (let i = 0; i < 5; i++) { // Use 'let' instead of 'var'
  functions.push(() => {
    console.log("Current value of i is:", i);
  });
}

functions.forEach((func) => func());


/* 
CLOSURE:

QUESTION #1

Create a function called privateCounter() that behaves like a private counter.
The function should not have any public variables, and the count should only be accessible through a closure.
It should have two methods: increment() and getCount(). The increment() method should increment the count,
and getCount() should return the current count.

Solution :
*/
function privateCounter() {
  let count = 0; 

  function increment() {
    count++;
  }

  function getCount() {
    return count;
  }

  return {
    increment,
    getCount
  };
}

// print to check solution:
const counter = privateCounter();
counter.increment();
console.log(counter.getCount()); // Output: 1


/* 
QUESTION #2

Write a JavaScript function called generateFibonacci(count) that returns a closure.
The closure should generate the next number in the Fibonacci sequence each time it is called.
The generateFibonacci function should take a parameter count that determines how many times the closure will generate the next number,
and it should use recursion for this purpose.

Solution :
*/

function generateFibonacci(count) {
  let currentCount = 0; 

  function fibonacciNext() {
    if (currentCount >= count) {
      return undefined;
    }

    currentCount++; // counting how many times the closure will generate the next number
    if (currentCount === 1) {
      return 0;
    } else if (currentCount === 2) {
      return 1;
    } else {
      let prev = 0; 
      let curr = 1;
      let next;
      for (let i = 3; i <= currentCount; i++) {
        next = prev + curr; // the value of the next number after 0 and 1 (starting from th3 third num) is their summation, so as the rest of the numbers of fibonacci
        prev = curr; //updating the value of the previous to continue the series pointing at the current
        curr = next; // current points at the next to continue the seires
      }
      return next; 
    }
  }

  return fibonacciNext; // using recursion
}

// print to check solution:
const fibonacciGenerator = generateFibonacci(5);

for (let i = 0; i < 10; i++) {
  console.log(fibonacciGenerator()); // Outputs the first 5 numbers in the Fibonacci sequence
}



