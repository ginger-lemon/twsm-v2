import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

// get map/text data 
const apiKey = process.env.MY_API_KEY

// https://npgis.cpami.gov.tw/api/v1/SpeciesIntro?name=${value}&apiKey=${apiKey} 台灣生物多樣性的這支 api 有 CORS 問題
export const fetchTextDatas = createAsyncThunk(
    'fetch/fetchTextDatas',
    async (value) => {
        const { data } = await axios.get(`https://npgis.cpami.gov.tw/api/v1/SpeciesIntro?name=${value}&apiKey=${apiKey}`)
        return data
    }
)

// 1, 3 有 CORS 問題，第二支不同 API 但有參數的問題
// https://npgis.cpami.gov.tw/npgis/geoserver/npgis/ows?service=WFS&version=1.0.0&request=GetFeature&typeName=npgis:speciesrecord&viewparams=speciesName:${value} 新
// https://map.tbn.org.tw/geoserver/wfs?request=getFeature&typeName=species:occurrence&CQL_FILTER=scientificname='${value}'&outputformat=json 無法讀到學名
// https://npgis.cpami.gov.tw/openapi/v1/api/InvestigateRecord?apiKey=${apiKey}&speciesName=${value} 舊
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
        setFetchMapValue: (state, action) => {
            st
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