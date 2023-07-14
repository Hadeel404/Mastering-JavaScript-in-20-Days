# Day 1: INTRO, DOM, VALUES & DATA TYPES, OPERATORS.

This README file summarizes an introduction to JavaScript lesson on DOM, Values & Data Types,Operators. 

## Lesson Summary
Here are the key points covered:

-The DOM (Document Object Model) is an API that represents and interacts with any HTML or XML document. The DOM is a document model loaded in the browser and representing the document as a node tree
- Values are chuncks of information that we want to work with.
- Function declarations are also hoisted, allowing them to be called before they are defined.
- Hoisting does not apply to function expressions, arrow functions, or variables declared with `let` or `const`.

## Coding Examples
On DOM:

```javascript

// to get the type of a value (var)
document.title
// the body element:
document.body
document.body.children //all the elements within the body
// getting elements :
document.getElementsByClassName // by the class name
document.getElementById("p1-name") // by id name

```
On values and operators :
strings, numbers, boolean, undefined, null, others : arrays, objects.

```javascript

// strings contain characters
// string functions:
"ALOHA".includes("HA") // checking if it includes "ha"
"ALOHA".length //to get the length of a string
```
On operators :
mathematic & comparison opperators
```javascript

// ex1:
1+1 = 2
//ex2:
2>4
```
## Coding Exercises

### [Compound Assignment With Augmented Multiplication](https://docs.google.com/spreadsheets/d/1p4cv-Ni5WZ1rd21IZh0ip9BxJRYm7uLl5tbf08oQwmw/edit#gid=0&range=E9)

#### My Solution
```javascript
let a = 5;
let b = 12;
let c = 4.6;

// Only change code below this line
a *= 5;
b *= 3 ;
c *=  10;
```
### [Concatenating Strings with the Plus Equals Operator](https://docs.google.com/spreadsheets/d/1p4cv-Ni5WZ1rd21IZh0ip9BxJRYm7uLl5tbf08oQwmw/edit#gid=0&range=E10)

#### My Solution
```javascript
let myStr="This is the first sentence.";
myStr += " This is the second sentence."
```
### [Use Bracket Notation to Find the Nth-to-Last Character in a String](https://docs.google.com/spreadsheets/d/1p4cv-Ni5WZ1rd21IZh0ip9BxJRYm7uLl5tbf08oQwmw/edit#gid=0&range=E11:E12)

#### My Solution
```javascript
var lastName = "Lovelace";

// Only change code below this line
var secondToLastLetterOfLastName = lastName[lastName.length - 2];
```

