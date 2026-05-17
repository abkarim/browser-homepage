import { configureStore } from "@reduxjs/toolkit";
import categoriesReducer from "./categoriesSlice";
import { saveState } from "./lib/storage";

const store = configureStore({
    reducer: {
        categories: categoriesReducer,
    },
});

store.subscribe(() => {
    saveState(store.getState().categories);
});

export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;

export default store;
