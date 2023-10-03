import { configureStore } from '@reduxjs/toolkit'
import searchReducer from './search/searchSlice'
import fetchReducer from './fetch/fetchSlice'

export default configureStore({
  reducer: {
    search: searchReducer,
    fetch: fetchReducer
  },
})