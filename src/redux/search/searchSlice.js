import { createSlice } from "@reduxjs/toolkit";

// 搜尋 input 欄位
export const searchSlice = createSlice({
    name: 'search',
    initialState: {
        inputValue: '',
        selectedKeyword: ''
    },
    reducers: {
        setInputValue: (state , action) => {
            state.inputValue = action.payload;
        },
        setSelectedKeyword: (state, action) => {
            state.selectedKeyword = action.payload
        }
    }
})

export const { 
    setInputValue,
    setSelectedKeyword, 
} = searchSlice.actions;

export default searchSlice.reducer;

