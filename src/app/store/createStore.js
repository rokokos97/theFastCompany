import { configureStore, combineReducers } from "@reduxjs/toolkit";

const rootReducer = combineReducers({});

export function createStore() {
    return configureStore({
        reducer: rootReducer
    });
}
