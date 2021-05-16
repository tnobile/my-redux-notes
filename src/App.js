import './App.css';
import NotesApp from './components/NotesApp';
import { connect } from 'react-redux'

/** 
 * https://chriscourses.com/blog/redux
 * Redux is simply a library that ensures we follow a certain pattern to update our global state. 
 * https://github.com/hstevanoski/react-redux-notes-app/tree/hooks/src
 **/
function App() {
  return (
    <div className="App">
      <NotesApp />
    </div>
  );
}

// useSelector hook instead
const mapStateToProps = state => {
  return { notes: state.notes }
}

// useDispatch hook instead.
const mapDispatchToProps = dispatch => {
  return {
    dispatch
  }
}

// connect is HOC higher order components
// just like decorator?
// https://reactjs.org/docs/higher-order-components.html
export default connect(mapStateToProps, mapDispatchToProps)(App)
