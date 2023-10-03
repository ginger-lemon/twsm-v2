import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

// get map/text data 
const apiKey = process.env.MY_API_KEY

// https://www.tbn.org.tw/api/v25/taxon?name=麻雀&withChildren=1
// https://npgis.cpami.gov.tw/api/v1/SpeciesIntro?name=${value}&apiKey=${apiKey}
export const fetchTextDatas = createAsyncThunk(
    'fetch/fetchTextDatas',
    async (value) => {
        const response = await axios.get(`https://www.tbn.org.tw/api/v25/taxon?name=${value}&withChildren=1`)
        return response.data
    }
)

export const fetchMapDatas = createAsyncThunk(
    'fetch/fetchMapDatas',
    async (value) => {
        const { data } = await axios.get(`https://npgis.cpami.gov.tw/npgis/geoserver/npgis/ows?service=WFS&version=1.0.0&request=GetFeature&typeName=npgis:speciesrecord&viewparams=speciesName:${value}`)
        return data
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
        parseJson: (state, action) => {
            state.textData = state.textData.json()
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

export default fetchSlice.reducer;