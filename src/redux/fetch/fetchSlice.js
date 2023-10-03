import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

// get map data 
const initialState = {
    loading: false,
    data: null,
    error: null,
}

const apiKey = process.env.MY_API_KEY

// set async action 
export const getMapData = createAsyncThunk(
    'fetch/getMapData',
    async (value) => {
        const response = await axios.get(`https://npgis.cpami.gov.tw/api/v1/SpeciesIntro?name=${value}&apiKey=${apiKey}`)
        // const data = await response.json()
        return response.data
    }
)

// set reducers and actions
export const fetchSlice = createSlice({
    name: 'fetch',
    initialState,
    reducers: {
        
    }, 
    extraReducers(builder) {
        builder
            .addCase(getMapData.pending, (state) => {
                state.loading = true
            })
            .addCase(getMapData.fulfilled, (state, action) => {
                state.loading = false
                state.data = action.payload
            })
            .addCase(getMapData.rejected, (state, action) => {
                state.loading = false
                state.error = action.error.message
            })
    }
})

export const { fetchRequest, fetchSuccess, fetchFailed } = fetchSlice.actions

export default fetchSlice.reducer