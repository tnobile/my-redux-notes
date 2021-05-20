import React, { useEffect, useState } from 'react'
import NoteList from './NoteList';
import NewNote from './AddNote';
import { useDispatch } from 'react-redux'
import { fetchNotes, clearNotes } from '../../redux/features/notes/notesSlice'
import SettingsPane from './SettingsPane';

const NotesApp = () => {
    const [term, setTerm] = useState();
    const dispatch = useDispatch();
    useEffect(() => {
        // thunk (middleware captures it)
        dispatch(fetchNotes(5))
    }, [dispatch])

    return (
        <div className="container fluid" >
            <div className="row">
                <div className="col">
                    <NewNote dispatch={dispatch} />
                    <SettingsPane
                        handleSearch={v => setTerm(v)}
                        handleClear={() => dispatch(clearNotes())}
                        handleClick={v => dispatch(fetchNotes(v < 10 ? v : 9))}
                        handleFetchError={v => dispatch(fetchNotes(-1))} />
                </div>
                <div className="col">
                    <NoteList term={term} />
                </div>
            </div>
        </div>
    )
}

export default NotesApp;