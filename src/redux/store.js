import { configureStore } from "@reduxjs/toolkit";
import dataReducer from "@/redux/feature/dataSlice";

export const store = configureStore({
    reducer: {
        data: dataReducer
    }
})