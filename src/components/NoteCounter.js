import { useSelector, shallowEqual } from "react-redux";

const NoteCounter = () => {
    const notes = useSelector(store => store.notes, shallowEqual);
    return (
        <div>{console.log('notes', notes)}
            <p className="text-center">Number of Notes: {notes.length}</p>
        </div>
    );
}
// const mapStateToProps = (state) => {
//     return { state }
// };

// export default connect(mapStateToProps)(NoteCounter);
export default NoteCounter;