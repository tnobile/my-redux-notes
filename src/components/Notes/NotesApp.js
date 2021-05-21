import React, { useEffect } from 'react'
import NoteList from './NoteList';
import NewNote from './AddNote';
import { useDispatch } from 'react-redux'
import { fetchNotes, clearNotes } from '../../redux/features/notes/notesSlice'
import { setSearchTerm} from '../../redux/features/searchTerm/searchTermSlice'
import SettingsPane from './SettingsPane';

const NotesApp = () => {
    const dispatch = useDispatch();
    useEffect(() => {
        // thunk (middleware captures it)
        dispatch(fetchNotes(5))
    }, [dispatch])


    const handleSearch = term => {
        dispatch(setSearchTerm(term));
    }

    return (
        <div className="container fluid" >
            <div className="row">
                <div className="col">
                    <NewNote dispatch={dispatch} />
                    <SettingsPane
                        handleSearch={v => handleSearch(v)}
                        handleClear={() => dispatch(clearNotes())}
                        handleClick={v => dispatch(fetchNotes(v < 50 ? v : 9))}
                        handleFetchError={v => dispatch(fetchNotes(-1))} />
                </div>
                <div className="col">
                    <NoteList />
                </div>
            </div>
        </div>
    )
}

export default NotesApp;