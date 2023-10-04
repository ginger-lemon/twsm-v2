import { createSlice } from "@reduxjs/toolkit";

// 搜尋 input 欄位
const initialState = {
    inputValue: '',
    selectedValue: ''
}

export const searchSlice = createSlice({
    name: 'search',
    initialState,
    reducers: {
        setInputValue: (state , action) => {
            return {
                ...state,
                inputValue: action.payload
            }
        },
        setSelectedValue: (state, action) => {
            return {
                ...state,
                selectedValue: action.payload
            }
        }
    }
})

export const { 
    setInputValue,
    setSelectedValue, 
} = searchSlice.actions;

export default searchSlice.reducer;

