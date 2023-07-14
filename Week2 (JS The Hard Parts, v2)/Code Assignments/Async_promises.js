import fetch from 'node-fetch';

// Question 1:

const task1 = (cb) => setTimeout(() => {
    const message = "Task 1 has executed successfully!";
    cb(message);
}, 3000)
  
const task2 = (cb) => setTimeout(() => {
    const message = "Task 2 has executed successfully!";
    cb(message);
}, 0)
  
const task3 = (cb) => setTimeout(() => {
    const message = "Task 3 has executed successfully!";
    cb(message);
}, 1000)
  
const task4 = (cb) => setTimeout(() => {
    const message = "Task 4 has executed successfully!";
    cb(message);
}, 2000)
  
const task5 = (cb) => setTimeout(() => {
    const message = "Task 5 has executed successfully!";
    cb(message);
}, 4000)
 

const asyncTasks = [task1, task2, task3, task4, task5];

// modified executeInSequenceWithCBs function :
const executeInSequenceWithCBs = (tasks, callback) => { // as the function's name 'executeInSequenceWithCBs' implies, the solution is with using callbacks: 
    const results = [];
    let count = 0;

    const callTask = (task) => {
        task((message) => { //each task func has a message to get returned
        results.push(message); //pushing messages to the results array
        count++;

        if (count === tasks.length) { // to iterate through tasks:
            callback(results);
        } else {
            callTask(tasks[count]);
        }
        });
    };

    callTask(tasks[0]);
};

// print to check:
executeInSequenceWithCBs(asyncTasks, (results) => {
  console.log(results);
});

//___________________________________________________________________________________________________________________//
// Question 2:
const apis = [
    {
      apiName: "products", 
      apiUrl: "https://dummyjson.com/products",
    }, 
    {
      apiName: "users", 
      apiUrl: "https://dummyjson.com/users",
    }, 
    {
      apiName: "posts", 
      apiUrl: "https://dummyjson.com/posts",
    }, 
    {
      apiName: "comments", 
      apiUrl: "https://dummyjson.com/comments",
    }
  ]
  
  // modified executeInParallelWithPromises function :
  const executeInParallelWithPromises = (apis) => {
    const promises = apis.map(api => {
      return fetch(api.apiUrl)
        .then(response => response.json())
        .then(data => ({  // to spread the data inside the object
          apiName: api.apiName,
          apiUrl: api.apiUrl,
          apiData: data
        }));
    });
  
    return Promise.race(promises);
  };

  
// print to check:
executeInParallelWithPromises(apis)
  .then(result => console.log(result))
  .catch(error => console.error(error));



//___________________________________________________________________________________________________________________//
// Question 3:
  // same declared api array apove is used here:
  
// modified executeInSequenceWithPromises function :
const executeInSequenceWithPromises = (apis) => {
  const results = [];

  const complete = (index) => {
    if (index >= apis.length) {
      return Promise.resolve(results);
    }

    const api = apis[index];
    return fetch(api.apiUrl)
      .then(response => response.json()) // return it as json
      .then(data => {
        const result = { // to spread the data inside the object
          apiName: api.apiName,
          apiUrl: api.apiUrl,
          apiData: data
        };
        results.push(result);
        return complete(index + 1); // go to the next api in the array
      });
  };

  return executeNextApi(0); // passing the first api in the array
};

  
  // print to check:
executeInSequenceWithPromises(apis)
  .then(results => console.log(results))
  .catch(error => console.error(error));