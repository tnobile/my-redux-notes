//import { createSlice } from "@reduxjs/toolkit";
// const searchSlice = createSlice({
//     name: "term",
//     initialState: "",
//     reducers: {
//         searchNotes: (state, action) => state = action.payload
//     }
// });


// export const { searchNotes } = searchSlice.actions;
// export default searchSlice.reducer;

const initialState = "";

export const searchTermReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'searchTerm/setSearchTerm':
            return action.payload;
        case 'searchTerm/clearSearchTerm':
            return '';
        default:
            return state;
    }
}

// action creator
export function setSearchTerm(term) {
    return {
        type: 'searchTerm/setSearchTerm',
        payload: term
    }
}

// action creator
export function clearSearchTerm() {
    return {
        type: 'searchTerm/clearSearchTerm'
    }
}

export const selectSearchTerm = (state) => state.searchTerm;
export const selectAllNotes = state => state.notes.notes;

export const selectFilteredAllNotes = (state) => {
    const allNotes = selectAllNotes(state);
    const searchTerm = selectSearchTerm(state);
    return allNotes.filter(note => !searchTerm || searchTerm === '' ? true :
        note.content.toLowerCase().includes(searchTerm.toLowerCase())
    );
};