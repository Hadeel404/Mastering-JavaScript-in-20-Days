# Day 4: Advanced Scope - remaining & Closure.

This README file summarizes Advanced Scope & Closure in JS . 

## Lesson Summary
Here are the key points covered:
-  Advanced scope material summary ia in day3.md file.
###  Closure :
*Closure* is when a function “remembers” its
lexical scope even when the function is
executed outside that lexical scope.

Example :

```javascript
function outerFunction() {
  let outerVariable = "hadeel";

  function innerFunction() {
    console.log(outerVariable); // Accessing the outerVariable from the enclosing scope
  }

  return innerFunction; // Returning the inner function
}

const closureExample = outerFunction();
closureExample(); // Output: "hadeel"

```
In this example, innerFunction is defined inside outerFunction, creating a closure. The innerFunction has access to the variables defined in its outer scope, even after outerFunction has finished executing. When closureExample is called, it still has access to the outerVariable defined in the enclosing scope of outerFunction, and it prints the value "hadeel". This behavior demonstrates how closures allow functions to "remember" their lexical environments even after their parent function has completed its execution.

*note* : more on closure can be found in week2 summary file day2.md


## Coding Exercises

### [SECTION'S EXERCISES](https://github.com/orjwan-alrajaby/gsg-expressjs-backend-training-2023/blob/main/learning-sprint-1/week3-day4-tasks/tasks.md)

#### My Solution
```javascript
// in file Code Exercises/Day4_Assignments
```
