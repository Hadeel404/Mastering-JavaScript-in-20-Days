/* 
Question 1:
Write a closure named createCounter that takes an initial value start and returns a function.
The returned function, when invoked, should increment the counter by 1 and return the updated value.
*/
function createCounter(start) {
    let counter = start;
  
    return function() {
      counter++;
      return counter;
    };
  }

//print to check:
const mainFun = createCounter(3);
console.log(mainFun()); // Output: 4
/* 
Question 2:
Write a closure named calculateAverage that takes an array of numbers, nums, and returns a function.
The returned function, when invoked, should calculate and return the average of the numbers in the array.
*/
function calculateAverage(nums) {
    return function() {
      const sum = nums.reduce((preSum, num) => preSum + num, 0); //reduce uses a callback function to calculate the summation
      const avg = sum / nums.length;
      return avg;
    };
  }
  //print to check:
  const mainFun1 = calculateAverage([1, 2, 3]);
  console.log(mainFun1()); // Output: 2
/* 
Question 3:
Write a closure named powerOf that takes a base number base and returns a function.
The returned function, when invoked with an exponent exp,
should calculate and return the result of base raised to the power of exp.
*/
function powerOf(base) {
    return function(exp) {
      return Math.pow(base, exp);
    };
  }
  //print to check:
  const mainFun2 = powerOf(2);
  console.log(mainFun2(2)); // Output: 4 (2 to the power 2 )
/*
Question 4:
Write a closure named compose that takes multiple functions as arguments and returns a new function.
The returned function should apply the provided functions in reverse order,
passing the result of each function as an argument to the next function.
 */
function compose(...allFunctions) { // to spread the passed functions
    return function(value) {
      return allFunctions.reduceRight((result, func) => func(result), value); // to apply functions in reversed order
    };
  }
  
  // print to check:
  function add(x) {
    return x + x;
  }
  function mul(x) {
    return x * x;
  }
  function div(x) {
    return x / x;
  }
  const mainFun3 = compose(div, mul, add);
  console.log(mainFun3(4)); // Output: 1