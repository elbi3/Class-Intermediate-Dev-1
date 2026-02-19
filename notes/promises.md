# Promises in JavaScript
1. a Promise has 3 states: pending, fulfilled, rejected
2. create a Promise using a constructor `new Promise(...)`
```js
const myPromise = new Promise((resolve, reject) => {
    const condition = "some condition logic here...";
    if(condition) {
        resolve("Promise is resolved successfully.");
    } else {
        reject("Promise is rejected.")
    }
    //async code
});
```
3. `resolve` and`reject` are also functions.
4. handle the outcome using `.then()` (for success) and `.catch()` (for error)
```js
examplePromise
    .then(result => console.log(result))
    .catch(error => console.error(error));
```
5. this pattern is essential for effective asynchronous programming in JavaScript
6. Chaining Promises. Promise chaning is powerful! 
7. Each .then() block receives the results from the previous block, and returns a new value or Promise
```js
new Promise((resolve, reject) => {
    setTimeout(() => resolve(1), 1000);
})
.then(result => {
    console.log(result);//1
    return result * 2;
})
.then(result => {
    console.log(result); //2
    return result * 3;
})
.then(result => {
    console.log(result); //6
    return result * 4;
})
.catch(error => console.error(error))
.finally(() => console.log("Completed"));
```
8. if there is an error, the control will jump right to the `.catch()` block
9. the `.finally()` block will execute at the end when completed, and will execute regardless of Promise success or failure
10. error handling extremely important, is streamlined with using `.catch()`. When there is an error, we skip all subsequent `.then()` blocks and "catch" it in the `.catch()` block

## Advanced Promise Patterns
11. `Promise.all` for parallel execution (wait for all of them to complete),
(useful if we have multiple asynchronous tasks that we need to synchronize)
12. `Promise.race` for competitive execution,
13. sometimes we need to control the flow of multiple asynchronous operations
```js
Promise.all([
    fetch("https://api.example.com/data1"),
    fetch("https://api.example.com/data2")
])
.then(responses => Promise.all(responses.map(r => r.json())))
.then(data => console.log("All data received: ", data))
.catch(error => console.error("An error occurred: ", error));
```
14. `Promise.race` waits only for a promise to settle, ether resolved or rejected
```js
Promise.race([
    fetch("https://api.example.com/data1"),
    fetch("https://api.example.com/data2")
])
.then(responses => Promise.all(responses.map(r => r.json())))
.then(data => console.log("All data received: ", data))
.catch(error => console.error("An error occurred: ", error));
```
15. Promise chaining best practices: always return a value or another Promise. The next event in the chain recieves the intended input. be careful about unintentional or undefined returns
16. You have to understand the EVENT LOOP in order to understand Promises
17. error handling- when an error occurs, the control jumps to the *nearest* catch, and then handles it, then the chain can continue. Let's you recover from errors and ensures the chain does not break. Uncalled errors can lead to unhandled error rejections.
18. `Promise.allSettled`
when you want to perform separate async operations independently. `Promise.allSettled` waits for all the Promises to settle, whereas Promise.all rejects as soon as one promise in the array rejects, but Promise.allSettled waits for all to settle regardless of outcome-ideal for when you know the result of each promise
```js
Promise.allSettled([
    fetch("http://api.example.com/data1"),
    fetch("https://api.example.com/data2").then(response => {
        if(!response.ok) throw new Error("Failed to fetch data2");
        return response.json();
    }),
    Promise.reject("Manual error")
])
    .then(results => {
        results.forEach((result, index) => {
            console.log(`Promise ${index} status: `, result.status);
        });
    });
```
19. `async` `await` is syntactic sugar for Promises.
20. it's used a lot in modern JavaScript- it really simplifies the way we write asynchronous code
21. asynchronous function always returns a Promise, and the await keyword pauses the execution until the Promise settles. This syntax simplifies and makes code easier to read
22. using try/catch block to handle errors, much better/simpler than chaining then and catch methods

q1 initial state is pending
q2 .then attaches callback for successful completion
q3 .catch called on a promise when it's rejected
q4. promise.all() executes multiple promises in parallel
q5. promise resolved with another promise by returning the second promise in the first one's executor
q6. .finally executes a callback regardless of the Promise's outcome
q7. state of fulfilled or rejected promise is "settled"
q8. the purpose of the resolve function in a Promise is to mark promise as fulfilled
q9. if a .then handler doesn't return anything, it throws an error?
q10. .finally handles both fulfillment and rejection in a single method
q11. if an error is not caught in promise chaining it results in an unhandled promise rejection
q12. promise.resolve creates a promise that is resolved with the given value
q13. correct way to create a new Promise is `new Promise((resolve, reject) =>{});
q14. promise chaining is used to execute asynch operations sequentially
q15. a reject in a promise marks the promise as rejected

quiz answers:
A Promise in JavaScript starts in the 'Pending' state, indicating that the asynchronous operation has not yet completed.

The .then() method is used to attach callback functions that will be executed upon the successful completion of a Promise.

The .catch() method is used to define a callback that will be executed if the Promise is rejected.

Promise.all() is used for executing multiple promises in parallel and waits for all of them to be settled.

A Promise can be resolved with another Promise by returning the second Promise within the executor of the first one.

The .finally() method is used to execute a callback regardless of whether the Promise was fulfilled or rejected.

A Promise is considered 'Settled' if it has been either fulfilled or rejected.

The resolve function is used to mark the Promise as fulfilled and pass the successful result.

q: What happens if a .then() handler doesn’t return anything?
9 WRONG I think it was it returns 'undefined"

.finally() is used to execute a callback regardless of the promise's outcome, whether it's fulfilled or rejected.

If an error occurs in a promise chain and is not caught, it leads to an unhandled promise rejection.

Promise.resolve() creates a Promise that is resolved with the given value.

A new Promise is created using the syntax new Promise((resolve, reject) => {}).

Promise chaining is the technique used to execute asynchronous operations sequentially.

The reject function in a Promise is used to mark the Promise as rejected and pass the error or rejection reason.