'use client'

import { configureStore } from "@reduxjs/toolkit"
import ImageSlice from "./Features/ImageSlice";
import RatingSlice from "./Features/RatingSlice";


export const store = configureStore({
    reducer: {
        ImageSlice,
        RatingSlice
    }
})

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch