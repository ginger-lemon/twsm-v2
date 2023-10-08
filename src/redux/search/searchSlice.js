import { createSlice } from "@reduxjs/toolkit";

// 搜尋 input 欄位
const initialState = {
    inputValue: '',
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
        }
    }
})

export const { 
    setInputValue,
    resetValue,
} = searchSlice.actions;

export default searchSlice.reducer;

