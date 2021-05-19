import { configureStore, getDefaultMiddleware, applyMiddleware } from '@reduxjs/toolkit'
import { combineReducers } from 'redux'
import notesSlice from "../features/notes/notesSlice"
import todosSlice from "../features/todos/todosSlice"
import loggerMiddleware from '../middleware/logger'
import { composeWithDevTools } from 'redux-devtools-extension'
import thunk from 'redux-thunk'

const reducer = combineReducers({
    notes: notesSlice,
    todos: todosSlice,
})

const composedEnhancer = composeWithDevTools(applyMiddleware(thunk))

const store = configureStore({
    reducer,
    middleware: [thunk, loggerMiddleware, ...getDefaultMiddleware()],
})
export default store;