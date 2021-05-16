import { ADD_NOTE, REMOVE_NOTE, LOAD_NOTES } from '../actions/actions';

const initialState = {
    notes: [],
    signUpModal: {
        open: false
    }
}

const rootReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_NOTE:
            return {
                ...state, notes: [...state.notes, action.payload]
            };
        //return Object.assign({}, state, { posts: state.posts.concat(action.payload) })

        case LOAD_NOTES:
            return {
                //...state, posts: [...state.posts, ...action.payload]
                ...state, notes: [...state.notes, ...action.payload.map(p => ({ id: p.id, title: p.title, content: p.body }))]
                //posts: state.posts.concat(action.payload)
            };
        case REMOVE_NOTE:
            return {
                ...state, notes: [...state.notes.filter(p => p.id !== action.payload)]
            }
        default:
            return state;
    }
}


export default rootReducer;