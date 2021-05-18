import { configureStore } from '@reduxjs/toolkit'
import { combineReducers } from 'redux'
import notesSlice from "../features/notes/notesSlice"
import todosSlice from "../features/todos/todosSlice"

const reducer = combineReducers({
    notes: notesSlice,
    todos: todosSlice,
})

const store = configureStore({
    reducer,
})
export default store;