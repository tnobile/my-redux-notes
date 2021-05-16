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
                    payload: json.slice(0, 5)
                })
            })
    }, [])

    return (
        < div className="App" >
            <h1>React Redux Notes App</h1>
            <NewNote dispatch={dispatch} />
            <hr />
            <NoteList />
        </div>
    )
}

export default NotesApp;