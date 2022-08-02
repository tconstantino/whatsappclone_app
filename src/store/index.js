import { configureStore } from "@reduxjs/toolkit";
import * as rootReducer from "../reducers";

const store = configureStore({ reducer: rootReducer});

export default store;