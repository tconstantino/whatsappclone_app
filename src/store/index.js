import { async } from "@firebase/util";
import { configureStore, createListenerMiddleware, getDefaultMiddleware } from "@reduxjs/toolkit";
import * as rootReducer from "../reducers";
import thunk from "redux-thunk";


const store = configureStore({ 
    reducer: rootReducer,
    middleware: (getDefaultMiddleware) => getDefaultMiddleware({
        serializableCheck: false,
    }).concat(thunk)
});

export default store;