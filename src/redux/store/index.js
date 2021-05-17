import { configureStore } from '@reduxjs/toolkit'
import { combineReducers } from 'redux'
import notesSlice from "../features/notes/notesSlice"

const reducer = combineReducers({
    notes: notesSlice,
})

const store = configureStore({
    reducer,
})
export default store;