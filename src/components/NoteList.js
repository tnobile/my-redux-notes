import React from "react"
import { useDispatch, useSelector, shallowEqual } from "react-redux";
import { removeNote } from '../redux/actions/actions'

/**
 * The useSelector hook uses === (a.k.a. strict reference equality check) to check whether the previously fetched value from the store 
 * is the same that we are currently getting. If that’s not the case, the component re-renders.
 * For simple selectors that only return a portion of the Redux store and nothing more, you can omit the second parameter in this hook. 
 * However, when a new object is returned each time the hook runs (e.g., you are making some calculations in the selector function or are 
 * building a new object from multiple values of the store), then you should make use of the Redux’s shallowEqual function. If that’s not sufficient, 
 * give Reselect a try or try wrapping your component in useMemo instead.
 */
const NoteList = () => {
    const notes = useSelector(store => store.notes, shallowEqual);
    const dispatch = useDispatch();
    const handleClick = (id) => {
        dispatch(removeNote(id));
    }

    const notesItems = notes.map((note, index) => (
        <li key={index}>
            <b>{note.title}</b>
            <button onClick={() => handleClick(note.id)}>x</button>
            <br />
            <span>{note.content}</span>
        </li>
    ));

    return (
        <React.Fragment>
            <h3>all notes</h3>
            <div>
                {notes && notesItems}
            </div>
        </React.Fragment>)
}

export default NoteList