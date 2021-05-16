import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { addNote } from '../redux/actions/actions'

const NotesForm = () => {
    const [value, setValue] = useState('');
    const [content, setContent] = useState('');

    const dispatch = useDispatch();

    const handleChange = (e) => { setValue(e.target.value) }

    const handleSubmit = (e) => {
        e.preventDefault();

        dispatch(addNote(value, content));

        setContent('');
        setValue('');
    }

    return (
        <div className="note-container" >
            <h2 className="text-center">Write a new note</h2>
            <form className="form-group" 
                  onSubmit={handleSubmit}>
            <input className="form-control" 
                    type="text" name='title'
                    placeholder="enter title"
                    value={value} onChange={handleChange}></input>
            <textarea className="form-control" 
                    name='content' required rows={5}
                    placeholder="enter content"
                    value={content} onChange={e => setContent(e.target.value)}></textarea>
                <button className="btn btn-primary btn-lg" type="submit" onClick={handleSubmit}>Submit</button>
            </form>
        </div >
    );
}

export default NotesForm