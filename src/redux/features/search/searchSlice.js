import { createSlice } from "@reduxjs/toolkit";

const searchSlice = createSlice({
    name: "term",
    initialState: "",
    reducers: {
        searchNotes: (state, action) => state = action.payload
    }
});


export const { searchNotes } = searchSlice.actions;
export default searchSlice.reducer;
