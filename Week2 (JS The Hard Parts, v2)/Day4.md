# Day 4: object oriented programming in JS.

This README file summarizes OOP in JS. 

## Lesson Summary
Here are the key points covered:

-Objects : store functions with their associated data.

-Using the prototype chain: Store the increment function in just one object and have the interpreter.

## coding Example: 

```javascript
function userCreator (name, score) {
 const newUser = Object.create(userFunctionStore);
 newUser.name = name;
 newUser.score = score;
 return newUser;
};
const userFunctionStore = {
 increment: function(){this.score++;},
 login: function(){console.log("Logged in");}
};
const user1 = userCreator("Will", 3);
const user2 = userCreator("Tim", 5);
user1.increment();

```

## Coding Exercises

### [Hadeel's FCC profile](https://www.freecodecamp.org/Hadeel_Q)


