import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit'
import { combineReducers } from 'redux'
import notesSlice from "../features/notes/notesSlice"
import todosSlice from "../features/todos/todosSlice"
import { searchTermReducer } from "../features/searchTerm/searchTermSlice"
import loggerMiddleware from '../middleware/logger'
//import { composeWithDevTools } from 'redux-devtools-extension'
import thunk from 'redux-thunk'

// key will be the name in the store!!!
const reducer = combineReducers({
    notes: notesSlice,
    todos: todosSlice,
    searchTerm: searchTermReducer,
})

//const composedEnhancer = composeWithDevTools(applyMiddleware(thunk))

const store = configureStore({
    reducer,
    middleware: [thunk, loggerMiddleware, ...getDefaultMiddleware()],
})
export default store;