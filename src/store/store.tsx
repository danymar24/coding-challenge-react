import { configureStore } from "@reduxjs/toolkit";
import foodReducer from './features/food';

export default configureStore({
    reducer: {
        food: foodReducer,
    },
})
