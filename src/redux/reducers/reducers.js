import { ADD_NOTE, DELETE_NOTE, LOAD_NOTES, EDIT_NOTE, UPDATE_NOTE } from '../actions/actions';

const initialState = {
    notes: [], // just array is better, no need for 'notes' if there are no extra fields.
}

const rootReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_NOTE:
            return { notes: [action.payload, ...state.notes] }
            //return Object.assign({}, state, { posts: state.posts.concat(action.payload) })

        case LOAD_NOTES:
            return {
                //...state, posts: [...state.posts, ...action.payload]
                notes: [...state.notes, ...action.payload.map(p => ({ id: p.id, title: p.title, content: p.body, editong: false }))]
                //posts: state.posts.concat(action.payload)
            };
        case DELETE_NOTE:
            return { notes: [...state.notes.filter(p => p.id !== action.payload)] };
        case EDIT_NOTE:
            return { notes: state.notes.map(note => note.id === action.payload ? { ...note, editing: true } : note) };
        case UPDATE_NOTE:
            console.log('updating', action.payload)
            return {
                notes: [{ ...action.payload, editing: false }, ...state.notes.filter(note => note.id !== action.payload.id),]
            }
        default:
            return state;
    }
}

export default rootReducer;