export const SUM_USING_CALLBACKS = "SUM_USING_CALLBACKS";
export const SUM_USING_ASYNC_AWAIT = "SUM_USING_ASYNC_AWAIT";
export const SUM_USING_SAGA = "SUM_USING_SAGA";

export function sumUsingCallbacks() {
    return {
        type: SUM_USING_CALLBACKS,
    };
}

export function sumUsingAsyncAwait() {
    return {
        type: SUM_USING_ASYNC_AWAIT,
    };
}

export function sumUsingSaga() {
    return {
        type: SUM_USING_SAGA,
    };
}
