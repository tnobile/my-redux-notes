import React, { useEffect } from 'react'
import NoteList from './NoteList';
import NewNote from './NotesForm';
import { useDispatch } from 'react-redux'

const NotesApp = () => {

    const dispatch = useDispatch();
    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/posts')
            .then(response => response.json())
            .then(json => {
                console.log("p", json)
                dispatch({
                    type: 'LOAD_NOTES',
                    payload: json.slice(0, 15)
                })
            })
    }, [dispatch])

    return (
        < div className="container fluid" >
            <div className="row">
                <div className="col">
                    <NewNote dispatch={dispatch} />
                </div>
                <div className="col">
                    <NoteList />
                </div>
            </div>
        </div>
    )
}

export default NotesApp;