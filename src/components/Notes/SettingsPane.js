import { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { setSearchTerm } from '../../redux/features/searchTerm/searchTermSlice'
import { clearNotes, fetchNotes } from '../../redux/features/notes/notesSlice'
import SearchTerm from '../../redux/features/searchTerm/SearchTerm'

const SettingsPane = () => {
    const dispatch = useDispatch();
    const term = useSelector(store=>store.searchTerm);
    const [value, setValue] = useState(10);

    const handleTermChange = evt => {
        dispatch(setSearchTerm(evt.target.value));
    }
    const handleClearHere = () => {
        dispatch(clearNotes());
        dispatch(setSearchTerm(""));
    }

    const handleFetchError = v => dispatch(fetchNotes(-1))

    return (
        <div className="note-container">
            <div className="input-group m-1">
                <input className="form-control" placeholder='How many to fetch?' type='number' value={value} onChange={evt => setValue(evt.target.value)}></input>
                <button className="btn btn-info btn-lg m-1" type="submit" onClick={() => dispatch(fetchNotes(value < 50 ? value : 9))}>Fetch</button>
            </div>
            <button className="btn btn-secondary btn-lg m-1" onClick={handleClearHere}>clear all </button>
            <button className="btn btn-danger btn-lg m-1" onClick={handleFetchError}>fetch with error </button>
            <div className='m-1'>
                <input className="form-control" placeholder='search...' type='text' value={term} onChange={handleTermChange}></input>
            </div>
            <div>
                <SearchTerm />
            </div>
        </div >
    )
}

export default SettingsPane;