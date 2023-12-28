'use client'
import { createSlice } from "@reduxjs/toolkit";

// export interface currentImg { 
//     currentImg: {
//         imgSrc: string
//         p: string
//         h1: string
//     }
// }

const initialState:  any = {
    currentOrder: {},
}

const ratingSlice = createSlice({
    name: 'rateItem',
    initialState,
    reducers: {
        changeItemToBeRated: (state, {payload}) => {
            state.currentOrder = payload
        }
    }
})

export const { changeItemToBeRated } = ratingSlice.actions
export default ratingSlice.reducer