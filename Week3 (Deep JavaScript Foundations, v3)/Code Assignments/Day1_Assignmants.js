/* 
Question 1:
    Write a function called convertStringToNumber that converts a string to a number using the unary plus operator.
    If the input is not a string, return an object of the input's value and type.

*/
//Solution : 
function convertStringToNumber(input) {
    return ((typeof input == "string")?
    input++
    :{
        input_value : input, 
        type: typeof input
    } );
  }

  // print to check :
  //let m = convertStringToNumber("2");
  //console.log(typeof(m))

/*
Question 2:
    Write a function called checkNaN that takes a single argument and returns true if the argument is NaN
    and false otherwise.

*/
//Solution :
const checkNaN = (value) => {
    return isNaN(value);
  }
// print to check :
  //let m = checkNaN("l");
  //console.log(m)
/*
Question 3:
    Write a function called isEmptyValue that checks if a given input is an empty value (undefined, null, or empty string).
*/
//Solution :
function isEmptyValue(value) {
    if( value === undefined) {
        return "undefined"
    }else if (value === null) {
        return "null"
    }else if (value === ''){
        return " empty string"
    }else{
        return "sth went wrong!"
    };
  }
// print to check :
//   let c="";
//   let m = isEmptyValue(c);
//   console.log(m)
/*

Question 4:
    Write a function called compareObjects that takes 2 arguments of type "object" and compares them. 
    If both arguments are equal, return true. If not, return false.
    If either argument is not of type "object",the function should return an array of the arguments.
*/
//Solution :
function compareObjects(input1, input2) {
    if (typeof input1 !== 'object' || typeof input2 !== 'object') {
        return arr=[input1, input2];
      }
    
      // compare num of object keys if are the same so we save time:
      const input1_keys = Object.keys(input1);
      const input2_keys = Object.keys(input2);
    
      if (input1_keys.length !== input2_keys.length) {
        return false;
      }
    // comparing the actual values :
      for (let key of keys1) {
        if (input1[key] !== input2[key]) {
          return false;
        }
      }
    
      return true;
    
  }
// print to check :
//    let m = compareObjects({ name: "lolo", age: 3 }, { name: "lolo", age: 3 }); 
//    console.log(m)
/*

Question 5:
    Write a function called complexCoercion that takes a single argument and checks if its type is primitive,
    and if so returns a coerced value according to the rules below.

coercion rules:

if input is primive and:
if input is a number, convert to string and then return a boolean.
if input is a string, return a boolean.
if input is null or undefined, return false.
If input is not a primitive type, return the argument.


//Solution :
const complexCoercion = (input) => {
  //write your own code here
}
*/