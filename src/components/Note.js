import React, { Component } from 'react';
import { connect } from 'react-redux'
import { editNote, deleteNote } from '../redux/actions/actions'

class Note extends Component {
    render() {
        return (
            <div className="note">
                <h2 className="note_title">{this.props.note.title}</h2>
                <p className="note_message">{this.props.note.id}</p>
                <p className="note_message">{this.props.note.content}</p>
                <div className="control-buttons">
                    <button className="btn btn-primary px-4 m-1"
                        onClick={() => this.props.dispatch(editNote(this.props.note.id))}>
                        Edit</button>
                    <button className="btn btn-danger m-1"
                        onClick={() => this.props.dispatch(deleteNote(this.props.note.id))}>
                        Delete</button>
                </div>
            </div>
        )
    }
}
export default connect()(Note);