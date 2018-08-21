import { createStore, applyMiddleware  } from "redux";
import { callbackMiddleware } from "./callbacks";

const rootReducer = (state = {}) => {
    return state;
}

export function getStore() {
    return createStore(rootReducer, applyMiddleware(callbackMiddleware));
}

export const store = getStore();
