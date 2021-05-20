import { useSelector, shallowEqual } from "react-redux";
//import { selectNotesIds } from '../../redux/features/notes/notesSlice'

const NoteCounter = () => {
    //const { notes } = useSelector(store => store.notes, shallowEqual);
    const notes = useSelector(store=>store.notes.notes, shallowEqual);
    //const notes = useSelector(selectNotesIds);
    return (
        <div>
            {console.log('notes in counter', notes)}
            <p className="text-center">Number of Notes: {notes.length}</p>
        </div>
    );
}
// const mapStateToProps = (state) => {
//     return { state }
// };

// export default connect(mapStateToProps)(NoteCounter);
export default NoteCounter;