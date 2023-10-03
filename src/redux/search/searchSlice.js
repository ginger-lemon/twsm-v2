import { createSlice } from "@reduxjs/toolkit";

// 搜尋 input 欄位
const initialState = {
    inputValue: '',
    selectedKeyword: ''
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
        setSelectedKeyword: (state, action) => {
            return {
                ...state,
                selectedKeyword: action.payload
            }
        }
    }
})

export const { 
    setInputValue,
    setSelectedKeyword, 
} = searchSlice.actions;

export const getSearchKeyword = (state) => state.search.inputValue

export default searchSlice.reducer;

