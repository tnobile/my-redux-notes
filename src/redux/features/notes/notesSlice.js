import { createSlice } from '@reduxjs/toolkit';
const uuidv4 = require("uuid/v4")

export function fetchNotes(num = 9) {
    return async function fetchNotesThunk(dispatch, getState) {
        // fetch('https://jsonplaceholder.typicode.com/posts')
        //     .then(response => response.json())
        //     .then(json => {
        //         //console.log("p", json)
        //         dispatch(loadNotes(json.slice(0, 11)));
        //     });

        // sleep
        await new Promise(r => setTimeout(r, 5000 * Math.random()));

        const response = await fetch('https://jsonplaceholder.typicode.com/posts');
        const notes = await response.json();
        dispatch(loadNotes(notes.slice(0, num)));
    }
}

const notesSlice = createSlice({
    // A name, used in action types
    name: "notes",
    // better with initialState: []
    initialState: {
        notes: []
    },
    reducers: {
        // Redux toolkit uses Immer, you do not have to worry about mutating the state, but... just keep the logic
        //
        // Error: An immer producer returned a new value *and* modified its draft. Either return a new value *or* modify the draft
        // The issue is the use of an arrow function with no curly braces as the reducer, because that acts as an implicit return statement. 
        //So, you're both mutating state.token, and returning the result of the assignment.
        addNote: (state, action) => { state.notes = [action.payload, ...state.notes] },
        loadNotes: (state, action) => { state.notes = [...state.notes, ...action.payload.map(p => ({ id: uuidv4(), title: p.title, content: p.body, editong: false }))] },
        deleteNote: (state, action) => { state.notes = [...state.notes.filter(p => p.id !== action.payload)] },
        editNote: (state, action) => { state.notes = state.notes.map(note => note.id === action.payload ? { ...note, editing: true } : note) },
        updateNote: (state, action) => { state.notes = [{ ...action.payload, editing: false }, ...state.notes.filter(note => note.id !== action.payload.id),] },
        clearNotes: (state, action) => {state.notes=[]},
    }
});

// Will handle the action type `'notes/add'`, etc.
export const { addNote, loadNotes, deleteNote, editNote, updateNote, clearNotes } = notesSlice.actions;

export default notesSlice.reducer;