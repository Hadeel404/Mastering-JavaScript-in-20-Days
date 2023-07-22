# Day 2: Static Typing and scope in javaScript.

This README file summarizes Static Typing & scope in javaScript . 

## Lesson Summary
Here are the key points covered:

### *Static Typing*
  TypeScript, Flow, and type-aware linting:
#### Benefits:
1. Catch type-related mistakes
2. Communicate type intent
3. Provide IDE feedback

**Static type** in typeScript means when assignning a variable to a value this variable will only hold data with this value's data type.

EX:
```javascript
var txt: string = "lol";
txt = {changeTXT:"nope"};  // Error: can`t assign object to string
```
#### TypeScript VS Flow :

[full article on TypScript vs flow ](https://github.com/niieani/typescript-vs-flowtype)

![](./images/)


### *Scops*: 
- units of scope in Js are : functions and blocks.
- shadowing: when two varibles have the same name but with different scopes. 


### Strict mode : 
Strict mode is a feature in JavaScript that enforces a stricter set of rules during code execution, catching certain errors and preventing the use of certain unsafe practices. It helps improve code quality, enhances security, and avoids common pitfalls in JavaScript programming.

```javascript
function withStrictMode() {
  'use strict';
  y = 20; // This will throw a ReferenceError (implicit declaration not allowed in strict mode)
  return y;
}

console.log(withStrictMode()); // Throws ReferenceError: y is not defined

```

## Coding Exercises

#### [SECTION'S EXERCISES](https://github.com/orjwan-alrajaby/gsg-expressjs-backend-training-2023/blob/main/learning-sprint-1/week3-day2-tasks/tasks.md)

#### My Solution
```javascript
// in file Code Exercises/Day2_Assignments
```
