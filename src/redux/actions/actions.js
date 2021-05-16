export const ADD_NOTE = 'ADD_NOTE';
export const REMOVE_NOTE = 'REMOVE_NOTE';
export const LOAD_NOTES = 'LOAD_NOTES';
const uuidv4 = require("uuid/v4")

export function addNote(title, content) {
    return { type: ADD_NOTE, payload: { title: title, content: content, id: uuidv4() } };
}

export function removeNote(id) {
    return { type: REMOVE_NOTE, payload: id };
}

export function loadNotes(contents) {
    return { type: LOAD_NOTES, payload: contents }
}