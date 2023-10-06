import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const apiKey = process.env.MY_API_KEY

export const fetchTextDatas = createAsyncThunk(
    'fetch/fetchTextDatas',
    async (value) => {
        const { data } = await axios.get(`https://npgis.cpami.gov.tw/api/v1/SpeciesIntro?name=${value}&apiKey=${apiKey}`)
        const result = data.filter( 
            data => data.ChineseName === value || data.ChineseName.length === value.length || data.Kingdom === '植物界'
        )
        return result[0]
    }
)

// 改接 mock data 
// https://npgis.cpami.gov.tw/openapi/v1/api/InvestigateRecord?apiKey=${apiKey}&speciesName=${value} CORS issue
export const fetchMapDatas = createAsyncThunk(
    'fetch/fetchMapDatas',    
    async (value) => {
        // 使用 encodeURIComponent/decodeURIComponent 處理中文編碼問題
        const encodeValue = encodeURIComponent(value)
        const filename = `${encodeValue}.json`
        // using import to fetch local JSON files 
        const response = await import(`../../api/mapdata/${filename}`)
        // 'default' for using all of the content
        const data = response.default
        return data.results
    }
)

// set reducers
const initialState = {
    textData: null,
    mapData: {},
    textStatus: 'idle', // loading | successed | failed
    mapStatus: 'idle',
    textError: null,
    mapError: null,
}

export const fetchSlice = createSlice({
    name: 'fetch',
    initialState,
    reducers: {
        resetDatas: (state) => {
            return {
                ...state,
                textData : null,
                mapData : {},
                textStatus : 'idle',
                mapStatus : 'idle',
                }
            
        }
    },
    extraReducers: (builder) => {
        builder
            .addCase(fetchTextDatas.pending, (state) => {
                state.textStatus = 'loading'
            })
            .addCase(fetchTextDatas.fulfilled, (state, action) => {
                state.textStatus = 'successed',
                state.textData = action.payload
            })
            .addCase(fetchTextDatas.rejected, (state, action) => {
                state.textStatus = 'failed'
                state.textError = action.error.message
            })
            .addCase(fetchMapDatas.pending, (state) => {
                state.mapStatus = 'loading'
            })
            .addCase(fetchMapDatas.fulfilled, (state, action) => {
                state.mapStatus = 'successed'
                state.mapData = action.payload
            })
            .addCase(fetchMapDatas.rejected, (state, action) => {
                state.mapStatus = 'failed'
                state.mapError = action.error.message
            })
    }
})

export const { resetDatas } = fetchSlice.actions

export default fetchSlice.reducer;