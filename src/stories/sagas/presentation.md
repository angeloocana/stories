# Agenda

- Why redux-saga

- What is redux-saga

- Effects

- Channels


# Why redux-saga?

- Easy to test

- Makes your code more reasonable

- Ideal for common real-world applications

- Works on both client and server

- Large and growing contributing user base


# What is redux-saga?

- Redux middleware

- Listen for actions, dispatches other actions, (using effects)

- Interact with external APIs

- Maintains continuously running process called sagas

- Uses Yield keyword


# What is Yield?

- Special keyword that can delay the execution of subsequent code

- Only works inside generator functions

- Works with promises and condenses code surrounding them


# Async example with callbacks

```js
    api.call(URL, function callback(data){
        // code execution resumes here
    });

    // code outside callback runs before callback resolution
```
Code tends to drift to the right with more nested callbacks. (Callback hell)


# Async example with promises

```js

    api.call(URL)
    .then(data => {
        // code execution resumes here
    });
    
    // code after ".then()" runs before promise resolution
```
Code tends to grow vertically with additional "then" calls

# Async example with yield

```js
    const data = yield api.call(URL);

    // Execution resumes here. No code can run before promise resolution.
```
Code meant to be executed after call resolves can be placed on next line, as with synchronous code (no additional scoped required)

Code is always compact

# Continuously running process example

```js
import { delay } from "redux-saga";

function* logEachSecond() {
    while(true){
        yield delay(1000);
        console.log("Saga loop");
    }
}
```

TODO: Test example