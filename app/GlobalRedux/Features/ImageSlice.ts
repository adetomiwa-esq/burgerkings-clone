'use client'
import { OfferList } from "@/app/offers/OfferList";
import { createSlice } from "@reduxjs/toolkit";

export interface currentImg { 
    currentImg: {
        imgSrc: string
        p: string
        h1: string
    }
}

const initialState: currentImg | any = {
    currentImg: OfferList[0],
}

const imgSlice = createSlice({
    name: 'image',
    initialState,
    reducers: {
        changeImg: (state, {payload}) => {
            state.currentImg = payload
        }
    }
})

export const { changeImg } = imgSlice.actions
export default imgSlice.reducer