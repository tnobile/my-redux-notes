import { useSelector, shallowEqual } from "react-redux";

const NoteCounter = () => {
    const state = useSelector(store=>store.notes, shallowEqual);
    return (
        <div>{console.log('state', state)}
            <p className="text-center">Number of Notes: {state.length}</p>
        </div>
    );
}
// const mapStateToProps = (state) => {
//     return { state }
// };

// export default connect(mapStateToProps)(NoteCounter);
export default NoteCounter;