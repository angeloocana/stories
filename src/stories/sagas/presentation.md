# Agenda

- Why redux-saga?

- What is redux-saga?

- What is Yield?

- Async example with callbacks, promises and yield

- Effects

- Channels


# Why redux-saga?

- Makes your code more reasonable

- Easy to test

- Ideal for common real-world applications

- Works on both client and server

- Large and growing contributing user base


# What is redux-saga?

- Redux middleware

- Manages side effects (API, DB, logs, etc.)

- Listen for actions, dispatches other actions, (using effects)

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

```js
    api.call(URL_A, function callback(dataA){
        api.call(URL_B, function callback(dataB){
            api.call(URL_C, function callback(dataC){
                // ...
            });
        });
    });

    // code outside callbacks runs before callbacks resolutions
```

# Async example with promises

```js

    api.call(URL)
    .then(data => {
        // code execution resumes here
    });
    
    // code after ".then()" runs before promise resolution
```

Code tends to grow vertically with additional "then" calls

```js

    api.call(URL_A)
    .then(dataA => {
        return api.call(URL_B);
    })
    .then(dataB => {
        return api.call(URL_C);
    })
    .then(dataC => {
        // ...
    });
    
    // code after ".then()" runs before all promises resolutions
```

# Async example with yield

```js
    const data = yield api.call(URL);

    // Execution resumes here. No code can run before promise resolution.
```
Code meant to be executed after call resolves can be placed on next line, as with synchronous code (no additional scoped required)

Code is always compact

```js
    const dataA = yield api.call(URL_A);
    const dataB = yield api.call(URL_B);
    const dataC = yield api.call(URL_C);

    // Execution resumes here. No code can run before all promises resolutions.
```

# Advantages and Disadvantages to Yield

## Advantages of yield

- Significantly fewer lines of code

- Significantly less indentation (avoids "callback hell")

- Easiest to read quickly, reason about

- Easier to debug

- Execution stops on unhandled error

## Disadvantages of yield

- Only works inside Generator Functions

- Requires additional plugins

# What is a Generator Function?

- Special Javascript function denoted by *

- Calling function returns a generator

- Actual code is executed by calling "next" method

- Can "yield" multiple values

```js
    function getValue(a, b) {
        //...
        return a + b;
    }

    const data = getValue(1, 2);
```

```js
    function* getValue(a, b) {
        //...
        return a + b;
    }

    const gen = getValue();
    const data = gen.next(1, 2).value;
```

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

# Effects

- call

- put

- select

## takeEvery
```js
import { takeEvery } from "redux-saga/effects";

function* handleActionA(action) {
    // ...
}

function* watchActions() {
    yield takeEvery('ACTION_A', handleActionA);
}
```

## takeLatest
```js
import { takeLatest } from "redux-saga/effects";

function* handleActionA(action) {
    // ...
}

function* watchActions() {
    yield takeLatest('ACTION_A', handleActionA);
}

```
- take

- race

- all

## throttle

```js
function* handleInput(input) {
    // ...
}

function* watchInput() {
    yield throttle(500, 'INPUT_CHANGED', handleInput);
}
```

## actionChannel

```js
import { actionChannel, take, call } from "redux-saga/effects";

function* queueActions() {
    const channel = yield actionChannel("ACTION_KEY");

    while(true) {
        const action = yield take(channel);
        yield call(api, URL);
        // ...
    }
}
```