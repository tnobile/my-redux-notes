import { useState } from 'react'
import SearchTerm from '../../redux/features/searchTerm/SearchTerm'

const SettingsPane = ({ handleClick, handleClear, handleFetchError, handleSearch }) => {
    const [value, setValue] = useState(10);
    const [term, setTerm] = useState("");;

    const handleTermChange = evt => {
        setTerm(evt.target.value);
        handleSearch(evt.target.value);
    }
    const handleClearHere = () => {
        setTerm("");
        handleClear();
        handleSearch("");
    }
    return (
        <div className="note-container">
            <div className="input-group m-1">
                <input className="form-control" placeholder='How many to fetch?' type='number' value={value} onChange={evt => setValue(evt.target.value)}></input>
                <button className="btn btn-info btn-lg m-1" type="submit" onClick={() => handleClick(value)}>Fetch</button>
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