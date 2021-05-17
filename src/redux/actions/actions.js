export const ADD_NOTE = 'notes/addNote';
export const DELETE_NOTE = 'notes/deleteNote';
export const LOAD_NOTES = 'notes/loadNotes';
export const EDIT_NOTE = 'notes/editNote';
export const UPDATE_NOTE = 'notes/updateNote';

// export const ADD_NOTE = 'ADD_NOTE';
// export const DELETE_NOTE = 'DELETE_NOTE';
// export const LOAD_NOTES = 'LOAD_NOTES';
// export const EDIT_NOTE = 'EDIT_NOTE';
// export const UPDATE_NOTE = 'UPDATE_NOTE';

const uuidv4 = require("uuid/v4")

export function addNote(title, content) {
    return { type: ADD_NOTE, payload: { title: title, content: content, id: uuidv4(), editing: false } };
}

export function deleteNote(id) {
    return { type: DELETE_NOTE, payload: id };
}

export function loadNotes(contents) {
    return { type: LOAD_NOTES, payload: contents }
}

export function editNote(id) {
    return { type: EDIT_NOTE, payload: id };
}

export function updateNote(id, data) {
    return { type: UPDATE_NOTE, payload: { ...data, id: id } };
}