import { SUM_USING_CALLBACKS } from "./actions";

export const callbackMiddleware = store => next => action => {
    AsyncSum(action);
    return next(action);
}

function AsyncSum(action) {
    console.log("action: ", action);
    if (action.type === SUM_USING_CALLBACKS) {
        fakeAsyncRequest(1, (response1) => {
            fakeAsyncRequest(response1 + 1, (response2) => {
                fakeAsyncRequest(response2 + 1, (response3) => {
                    console.log("callback result: ", response3);
                });
            });
        });
    }
}

function fakeAsyncRequest(request, cb) {
    console.log("callback start request: ", request);
    setTimeout(() => cb(request), Math.random() * 2000);
}
