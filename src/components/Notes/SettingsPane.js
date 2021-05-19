import { useState } from 'react'

const SettingsPane = ({ handleClick, handleClear }) => {
    const [value, setValue] = useState(10);

    return (
        <div className="note-container">
            <div className="input-group m-1">
                <input className="form-control" placeholder='How many to fetch?' type='number' value={value} onChange={evt => setValue(evt.target.value)}></input>
                <button className="btn btn-info btn-lg m-1" type="submit" onClick={() => handleClick(value)}>Fetch</button>
            </div>
            <button className="btn btn-secondary btn-lg m-1" onClick={handleClear}>clear all </button>
        </div>
    )
}

export default SettingsPane;