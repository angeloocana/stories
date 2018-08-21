import { action } from '@storybook/addon-actions';

function fakeAsyncRequest(request, cb) {
    console.log("start request: ", request);
    setTimeout(() => cb(request), Math.random() * 2000);
}

export function AsyncSum() {
    fakeAsyncRequest(1, (response1) => {
        fakeAsyncRequest(response1 + 1, (response2) => {
            fakeAsyncRequest(response2 + 1, (response3) => {
                console.log("result: ", response3);
            });
        });
    });
}
