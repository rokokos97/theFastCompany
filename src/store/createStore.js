import { combineReducers, configureStore } from "@reduxjs/toolkit";

const routeReducer = combineReducers({});

export function createStore() {
    return configureStore({
        reducer: routeReducer
    });
}
