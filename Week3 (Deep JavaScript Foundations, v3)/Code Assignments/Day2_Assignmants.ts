//STATIC TYPING QUESTIONS:

//QUESTION #1

//Interfaces :
interface HelloWorldP {
    (): Promise<string>;
  }
  
  interface CheckBooleanP {
    (boolean: boolean): Promise<boolean>;
  }
  
  interface ReturnObjP {
    (): Promise<{ x: string; y: number }>;
  }

// question code: 
const sayHelloWorld : HelloWorldP =()=> 
new Promise((resolve, reject) => {
    resolve("Hello world!");
  });
  
const checkBoolean : CheckBooleanP = (boolean) => 
  new Promise ((resolve, reject) => {
    if (boolean) {
        resolve(boolean);
    } else {
        reject(`Input is false :(`)
    }
})

const returnObj :ReturnObjP = () => 
new Promise((resolve, reject) => {
    resolve({
        x: "meow",
        y: 45,
    })
})

//edited :
const promisesArray = Array < HelloWorldP | ReturnObjP | CheckBooleanP > = [sayHelloWorld, checkBoolean, returnObj];

//edited:
const convertToObj = async (array) => {
  const obj = {};
  for (let p of array) {
    const result = await p();
    Object.assign(obj, result);
  }
  return obj;
}
  

//_______________________________________________________________________________________
//SCOPE & HOISTING QUESTIONS:

//QUESTION #1: 
/*
answer is : C (1, ReferenceError, ReferenceError)
explanation :  

- The variable a is hoisted and accessible outside the "if block" since "var" has a function scope => prints 1.
- Variables b and c have block-level scope (block scope) and are not accessible outside the "if block" => prints ReferenceErrors.
*/


//QUESTION #2:
/*
answer is : A  (undefined, ReferenceError)
explanation :

- The variable a is hoisted and accessible outside the "if block" , but it's initial value is undefined => prints undefined.
- Variables b and c are not accessible before their declaration inside the "if block",
 so when printing their values to the console => prints ReferenceErrors.
 =>>>> only declaration is hoisted without initial values.
*/


//QUESTION #3:
/*
answer is : A ([ 36, 100, 45 ] | [ 1, 2, 3 ] | [ 36, 2, 3 ] )
explanation :
- when we print the first log it shows the initial values of a, b, and c outside the "if block".
- Inside the "if block" new variables a, b, and c are declared, and the second log displays their values,
- while in the third log it shows the updated value of variable a from inside the "if block" and the b and c values didn't changed.
*/