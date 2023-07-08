# Day 2: Expressions, Arrays, Objects

This README file summarizes the JavaScript lesson on Expressions, Arrays, Objects .

## Lesson Summary

Here are the key points covered:

- An expression "asks" JS for a value
- Arrays let us keep multiple values together in a single collection
- Objects collect multiple values together to describe more complex data.
## Coding Examples
Expressions:
```javascript
//ex:
myAssignedVariable
6 + 4
document.getElementById("board")
```

Arrays: 
```javascript
// ex:
let synonyms = ["plethora", "array", "cornucopia"];

```

Objects:
```javascript
//ex:
const js = {
    name: "JavaScript",
    abbreviation: "JS",
    isAwesome: true,
    officialSpec: "ECMAScript",
    birthYear: 1995,
    creator: "Brendan Eich"
};

```

## Coding Exercises

### [Profile Lookup](https://docs.google.com/spreadsheets/d/1p4cv-Ni5WZ1rd21IZh0ip9BxJRYm7uLl5tbf08oQwmw/edit#gid=0&range=E13)

#### My Solution
```javascript
function lookUpProfile(name, prop){
// Only change code below this line
var flag=0;
  for(var i=0;i<contacts.length;i++){
    if (contacts[i].firstName === name && contacts[i].hasOwnProperty(prop)){
      return contacts[i][prop];
    }
    else if(contacts[i].firstName === name && !contacts[i].hasOwnProperty(prop)){
      return "No such property";
    }
     else if(contacts[i].firstName !== name){
      flag=1;
    }
  }
  if(flag==1)
    return "No such contact";
// Only change code above this line
}

```

### [Copy Array Items Using slice](https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/basic-data-structures/copy-array-items-using-slice)

#### My Solution
```javascript
function forecast(arr) {
  // Only change code below this line

  return arr.slice(2, 4);
}
```

### [Combine Arrays with the Spread Operator](https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/basic-data-structures/copy-array-items-using-slice)

#### My Solution
```javascript
function spreadOut() {
  let fragment = ['to', 'code'];
  let sentence=['learning', ...fragment, 'is', 'fun']; // change this line
  return sentence;
}

```
