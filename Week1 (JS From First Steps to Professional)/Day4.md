# Day 4: 

This README file summarizes the JavaScript lesson on Events & handlers,Conditionals, Map & filter, Doggos Quiz Game .

## Lesson Summary

In this lesson, we explored mm in JavaScript. Here are the key points covered:

- The web browser fires events when certain things happen on the page
- conditions: if statments
- The map() method creates a new array populated with the results of calling a provided function on every element in the calling array.
- The filter() method creates a shallow copy of a portion of a given array, filtered down to just the elements from the given array that pass the test implemented by the provided function.


## Coding Examples
Events & handlers:
```javascript
document.addEventListener("click", () => {
    console.log("clicked")
});

```

conditions:
```javascript
if (5 > 4) {
    console.log("greater than");
} else {
    console.log("less than");
}

```

## Coding Exercises

### [Use Multiple Conditional (Ternary) Operators]()
#### My Solution
```javascript
function checkSign(num) {
  return (num > 0) ? "positive": ((num < 0) ? "negative" : "zero");
}

checkSign(10);

```
### [ Golf Code](https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/basic-javascript/golf-code)
#### My Solution
```javascript
function golfScore(par, strokes) {
  // Only change code below this line
  if(strokes === 1)
    return names[0];
  else if(strokes <= par-2)
    return names[1];
  else if(strokes === par-1)
    return names[2];
  else if(strokes === par)
    return names[3];
  else if(strokes === par+1)
    return names[4];
  else if(strokes ===  par+2)
    return names[5];
  else if(strokes >= par+3)
    return names[6];
  

  return "Change Me";
  // Only change code above this line
}

// Change these values to test
golfScore(7, 6);

```
### [Use the map Method to Extract Data from an Array](https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/functional-programming/use-the-map-method-to-extract-data-from-an-array)
#### My Solution
```javascript
// Add your code below this line

var rate = [];
watchList.map(x=>{
  rate.push({title: x["Title"],  rating: x["imdbRating"]});

});

```

### [Use the filter Method to Extract Data from an Array](https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/functional-programming/use-the-filter-method-to-extract-data-from-an-array)
#### My Solution
```javascript
// Add your code below this line

var filteredList;
filteredList=watchList.filter(x=> parseFloat(x.imdbRating) >8.0);
filteredList=filteredList.map(x=> ({title: x.Title,rating: x.imdbRating}));

```
