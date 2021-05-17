import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
//import { updateNote } from '../redux/actions/actions';
import { updateNote } from '../redux/features/notes/notesSlice';

const EditNote = ({ note }) => {
    const [title, setTitle] = useState(note.title);
    const [content, setContent] = useState(note.content);

    const dispatch = useDispatch();
    function handleUpdate(e) {
        e.preventDefault();
        const data = {
            title,
            content
        };
        console.log(`dispatch update with ${note.id}`, data);
        //dispatch(updateNote(note.id, data));
        dispatch(updateNote({ ...data, id: note.id }));
    };

    return (
        <div className="note">
            <form className="form-group" onSubmit={handleUpdate}>
                <input className='form-control p-2 mb-2'
                    required type="text" value={title} onChange={e => setTitle(e.target.value)}
                />
                <textarea className='form-control p-2 mb-2'
                    required rows="5" value={content} onChange={e => setContent(e.target.value)} />
                <button type="submit" className='btn btn-primary'>Update</button>
            </form>
        </div>
    );
}

export default EditNote;