import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { addNote } from '../redux/actions/actions'

const NotesForm = () => {
    const [value, setValue] = useState('');
    const [content, setContent] = useState('');

    const dispatch = useDispatch();
    const handleChange = (e) => {
        setValue(e.target.value)
    }

    const handleSubmit = (e) => {
        e.preventDefault();

        dispatch(addNote(value, content));

        setContent('');
        setValue('');
    }
    return (
        <form onSubmit={handleSubmit}>
            Title
            <input type="text" name='title'
                placeholder="enter note title"
                value={value} onChange={handleChange}></input>
            <br />
            Content
            <textarea name='content' required rows={5}
                value={content} onChange={e => setContent(e.target.value)}></textarea>
            <button type="submit" onClick={handleSubmit}>Submit</button>
        </form>
    );
}

export default NotesForm