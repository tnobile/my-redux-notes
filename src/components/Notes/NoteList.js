import React  from "react"
import { useSelector, shallowEqual } from "react-redux";
import Note from "./Note";
import NoteCounter from './NoteCounter'
import EditNote from './EditNote'

/**
 * The useSelector hook uses === (a.k.a. strict reference equality check) to check whether the previously fetched value from the store 
 * is the same that we are currently getting. If that’s not the case, the component re-renders.
 * For simple selectors that only return a portion of the Redux store and nothing more, you can omit the second parameter in this hook. 
 * However, when a new object is returned each time the hook runs (e.g., you are making some calculations in the selector function or are 
 * building a new object from multiple values of the store), then you should make use of the Redux’s shallowEqual function. If that’s not sufficient, 
 * give Reselect a try or try wrapping your component in useMemo instead.
 */
const NoteList = () => {
    const { notes, error, loading } = useSelector(store => store.notes, shallowEqual);
    const { search } = useSelector(store => store, shallowEqual);
    const term = search;

    const notesItems = notes.filter(n => term && term!=='' ? n.content.includes(term) : true).map((note) => (
        <div key={note.id}>
            {note.editing ?
                <EditNote note={note} /> : <Note note={note} />}
        </div>
    ));

    return (
        <div>
            {error && <div className="text-danger display-6 mt-5">Error! {error}</div>}
            {loading && <div className="text-center display-3 mt-5">Loading...</div>}
            {!error && !loading &&
                <div className="note-container">
                    <h3 className="text-center">All Notes</h3>
                    {notes && notes.length > 0 && <NoteCounter />}
                    {notes && notes.length === 0 && <div>Please fetch...</div>}
                    <div className="note-container">
                        {notes && notesItems}
                    </div>
                </div>
            }
        </div>)
}

export default NoteList