/* 
QUESTION #1

Create a function called arrowHOF that takes an arrow function as input
and returns a new arrow function that enhances the behavior of the input function.
The enhanced function should accept additional arguments and execute the input function multiple times based on these arguments.

solution :
*/
const exampleNormalFunc1 = (a, b, c) => {
    return a * (b + c);
  }
  
  const exampleNormalFunc2 = (x, y) => {
    return x * y;
  }
  
  const exampleNormalFunc3 = (string) => {
    return string + " " + string + " " + string + "!";
  }
  
  
  const arrowHOF = (normalFunc) => {
    return (...args) => { // takes all of the arguments
      return (...numOfLogs) => { // takes the additional argument which determins the number of logs as an  "array"
        const result = normalFunc(...args); // saving the function result
        const repeat = numOfLogs.length > 0 ? numOfLogs[0] : 1; // if an argument is passed to the function then repeat it with the value passed, else repeat = 1 (no repeatitions)
        return Array.from({ length: repeat }, () => result); // uses a callback to print result as many as the key lengthhas values in the passes object to array.from
      };
    };
  };
  
  
  const hofNormalFunc1 = arrowHOF(exampleNormalFunc1);
  const hofNormalFunc2 = arrowHOF(exampleNormalFunc2);
  const hofNormalFunc3 = arrowHOF(exampleNormalFunc3);
  
  // console.log(hofNormalFunc1(3, 4, 5)(2)); // logs 27 twice
  // console.log(hofNormalFunc2(20, 35)(4)); // logs 700 four times
  // console.log(hofNormalFunc3("Meow")()); // logs "Meow Meow Meow!" once
  
/* 
QUESTION #2

Build a function called preserveThis that takes a function as input 
and returns a new arrow function that behaves the same way as the input function
but preserves the original this context when used as a method of an object.

solution :
*/

// Example object
const obj = {
    name: 'John',
    greet: function (greeting) {
      console.log(`${greeting}, ${this.name}!`);
    }
  };
  
  const preserveThis = (func) => {
    return func.bind(obj);
  } //by using arrow functions and lexical scoping feature to preserve the original this context when used as a method of an object. 
  
  
  // Wrap the greet function using preserveThis
  const preservedGreet = preserveThis(obj.greet);
  
  // Call the wrapped function as a method of the object
  //preservedGreet('Hello'); // Output: "Hello, John!"
  
/* 
QUESTION #3

Consider the 2 following examples and distinguish the different output in each one with them with a reasoning.

Example 1 :
*/
function outer1() {
    var x = 10;
  
    var inner1 = function() {
      console.log(x);
    };
  
    inner1();
  }
  
  outer1(); // Output: 10
/*
Reasoning for example 1's output: :

inner1 has access to the variable x in its scope (closures).
When inner1 is invoked, it logs the value of x, which is 10, to the console. The output is 10.
*/
//Example 2 :

function outer2() {
    var x = 10;
  
    var inner2 = function() {
      var x = 20;
      console.log(x);
    };
  
    inner2();
  }
  
  outer2(); // Output: 20

/* 
 Reasoning for example 2's output:
 the inner function inner2 declares a new variable x that shadows the outer x (instead of x=10 in outer2(that has a functional scope) =>
  x= 20 now in the local scope of the local variable x),
*/