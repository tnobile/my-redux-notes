import { createSlice, createSelector } from '@reduxjs/toolkit';
const uuidv4 = require("uuid/v4")

export const selectNotes = (state) => state.notes.notes;

export const selectNotesIds = createSelector(
    selectNotes,
    notes => notes
)

export function fetchNotes(num = 9) {
    return async function fetchNotesThunk(dispatch, getState) {
        // fetch('https://jsonplaceholder.typicode.com/posts')
        //     .then(response => response.json())
        //     .then(json => {
        //         //console.log("p", json)
        //         dispatch(loadNotes(json.slice(0, 11)));
        //     });

        dispatch(fetchNotesBegin());

        // sleep
        await new Promise(r => setTimeout(r, 2000 * Math.random()));

        try {
            if (num < 0) {
                dispatch(fetchNotesError("oops!  ya me lo has dicho..."));
                return
            }

            let url = 'https://jsonplaceholder.typicode.com/posts';
            //url = 'https://zenquotes.io/api/quotes'

            const response = await fetch(url)
            if (!response.ok) {
                //throw Error(response.statusText);
                const message = `An error has occured: ${response.status}`;
                throw new Error(message);
            }
            const quotes = await response.json();
            //const notes = quotes.map(q => { return { title: q.q, content:q.a } });
            dispatch(loadNotes(quotes.slice(0, num)));
        } catch (error) {
            console.log('fetch error: ', error);
            dispatch(fetchNotesError(error.message));
        }
    }
}

const notesSlice = createSlice({
    // A name, used in action types
    name: "notes",
    // better with initialState: []
    initialState: {
        notes: [],
        loading: false,
        error: null,
    },
    reducers: {
        // Redux toolkit uses Immer, you do not have to worry about mutating the state, but... just keep the logic
        //
        // Error: An immer producer returned a new value *and* modified its draft. Either return a new value *or* modify the draft
        // The issue is the use of an arrow function with no curly braces as the reducer, because that acts as an implicit return statement. 
        //So, you're both mutating state.token, and returning the result of the assignment.
        addNote: (state, action) => state = { ...state, notes: [action.payload, ...state.notes], error: null },
        loadNotes: (state, action) => { state.loading = false; state.notes = [...state.notes, ...action.payload.map(p => ({ id: uuidv4(), title: p.title, content: p.body, editong: false }))] },
        deleteNote: (state, action) => { state.notes = [...state.notes.filter(p => p.id !== action.payload)] },
        editNote: (state, action) => { state.notes = state.notes.map(note => note.id === action.payload ? { ...note, editing: true } : note) },
        updateNote: (state, action) => { state.notes = [{ ...action.payload, editing: false }, ...state.notes.filter(note => note.id !== action.payload.id),] },
        clearNotes: state => state = { loading: false, error: null, notes: [] },
        fetchNotesBegin: state => state = { ...state, loading: true, error: null },
        fetchNotesError: (state, action) => state = { ...state, loading: false, error: action.payload },
    }
});

// Will handle the action type `'notes/add'`, etc.
export const { addNote, loadNotes, deleteNote, editNote, updateNote, clearNotes, fetchNotesBegin, fetchNotesError, } = notesSlice.actions;

export default notesSlice.reducer;