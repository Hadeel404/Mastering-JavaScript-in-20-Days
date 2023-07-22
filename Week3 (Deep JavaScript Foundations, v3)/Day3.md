# Day 3: Scope & Function Expressions, Advanced Scope.

This README file summarizes Scope & Function Expressions, AND Advanced Scope in JS. 

## Lesson Summary
Here are the key points covered:
- Anonymous functions are functions that have no name (like : arrow functions) while named functions can be referenced by their own name.
- Function expressions in JavaScript are anonymous functions that are assigned to variables or used as values within other expressions. They allow functions to be treated as first-class citizens, enabling them to be passed as arguments to other functions or returned from functions. Here's an example:

```javascript
const add = function(a, b) { return a + b; }; // Function expression assigned to 'add' variable.
const result = add(3, 5); // calling the function

```

### Named Function Expressions Benefits :
1. Reliable function self-reference (recursion, etc)
2. More debuggable stack traces
3. More self-documenting code

## Advanced Scope : 
###  Lexical scopes :
Lexical scopes in JavaScript refer to the ability of a function to access variables from its containing scope, which is determined by the location of the function's definition. This enables nested functions to create closures and retain access to variables from their enclosing scope, even after the outer function has completed execution.

ex:
```javascript
function outerFunction() {
  const outerVar = "Hello, ";

  function innerFunction(name) {
    console.log(outerVar + name);
  }

  return innerFunction;
}

const greet = outerFunction();
greet("Queen Hadeel"); // Output: "Hello, Queen Hadeel"

```
### Hoisting :
- Hoisting is the process of moving variable and function declarations to the top of their scope.
- Variable declarations are hoisted but not their assignments. They are accessible but have an initial value of undefined.
- Function declarations are also hoisted, allowing them to be called before they are defined.
- Hoisting does not apply to function expressions, arrow functions, or variables declared with let or const.

An example :

```javascript
// Example 1: Variable Hoisting
console.log(x); // Output: undefined
var x = 10;
console.log(x); // Output: 10

// Example 2: Function Hoisting
hoistedFunction(); // Output: "Hello, World!"

function hoistedFunction() {
  console.log("Hello, World!");
}

```

## Coding Exercises

### [SECTION'S EXERCISES](https://github.com/orjwan-alrajaby/gsg-expressjs-backend-training-2023/blob/main/learning-sprint-1/week3-day3-tasks/tasks.md)

#### My Solution
```javascript
// in file Code Exercises/Day3_Assignments
```
