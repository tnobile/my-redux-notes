import { createSlice } from '@reduxjs/toolkit';

/**
 * https://www.softkraft.co/how-to-setup-redux-with-redux-toolkit/
 * https://redux-toolkit.js.org/api/createSlice
 */
const notesSlice = createSlice({
    // A name, used in action types
    name: "notes",
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
        loadNotes: (state, action) => { state.notes = [...state.notes, ...action.payload.map(p => ({ id: p.id, title: p.title, content: p.body, editong: false }))] },
        deleteNote: (state, action) => { state.notes = [...state.notes.filter(p => p.id !== action.payload)] },
        editNote: (state, action) => { state.notes = state.notes.map(note => note.id === action.payload ? { ...note, editing: true } : note) },
        updateNote: (state, action) => { state.notes = [{ ...action.payload, editing: false }, ...state.notes.filter(note => note.id !== action.payload.id),] },
    }
});

// Will handle the action type `'notes/add'`, etc.
export const { addNote, loadNotes, deleteNote, editNote, updateNote } = notesSlice.actions;

export default notesSlice.reducer;