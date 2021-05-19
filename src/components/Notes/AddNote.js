import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
//import { addNote } from '../redux/actions/actions'
import { addNote } from '../../redux/features/notes/notesSlice'
import { nanoid } from 'nanoid'

const AddNote = () => {
    const [value, setValue] = useState('');
    const [content, setContent] = useState('');

    const dispatch = useDispatch();

    const handleSubmit = (e) => {
        e.preventDefault();
        //dispatch(addNote(value, content));
        dispatch(addNote({ title: value, content: content, id: nanoid(), editing: false }));

        setContent('');
        setValue('');
    }

    return (
        <div className="note-container" >
            <h2 className="text-center">Write a new note</h2>

            <form className="form-group" onSubmit={handleSubmit}>
                <input className="form-control" required
                    type="text" name='title'
                    placeholder="enter title"
                    value={value} onChange={e => setValue(e.target.value)} />
                <textarea className="form-control"
                    name='content' required rows={5}
                    placeholder="enter content"
                    value={content} onChange={e => setContent(e.target.value)} />
                <button className="btn btn-primary btn-lg" type="submit">Submit</button>
            </form>
        </div >
    );
}

export default AddNote;