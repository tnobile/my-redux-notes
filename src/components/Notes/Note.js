import React from 'react';
import { connect } from 'react-redux'
//import { editNote, deleteNote } from '../redux/actions/actions'
import { editNote, deleteNote } from '../../redux/features/notes/notesSlice';

const Note = ({ note, dispatch }) => {
    return (
        <div className="note">
            <h2 className="note_title">{note.title}</h2>
            <p className="note_message">{note.content}</p>
            <h2 className="note_message">{note.id}</h2>
            <div className="control-buttons">
                <button className="btn btn-primary px-4 m-1"
                    onClick={() => dispatch(editNote(note.id))}>
                    Edit</button>
                <button className="btn btn-danger m-1"
                    onClick={() => dispatch(deleteNote(note.id))}>
                    Delete</button>
            </div>
        </div>
    )
}
// useDispatch hook will be simpler than Higher Order Component
export default connect()(Note);