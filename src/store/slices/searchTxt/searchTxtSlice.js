import { createSlice } from "@reduxjs/toolkit";

export const searchTxtSlice = createSlice ({
    name: 'searchTxt',
    initialState: '',
    reducers: {
        toggleSearchTxt (state, { payload }) {
            return payload
        },
        resetSearchTxt() {
            return ''
        }
    }
})

export const selectSearchTxt = state => state.searchTxt

export const {resetSearchTxt, toggleSearchTxt } = searchTxtSlice.actions

export const searchTxtReducers = searchTxtSlice.reducer