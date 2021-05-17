import './App.css';
import NotesApp from './components/NotesApp';
import { connect } from 'react-redux'

import {
  HashRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

/** 
 * https://chriscourses.com/blog/redux
 * Redux is simply a library that ensures we follow a certain pattern to update our global state. 
 * https://github.com/hstevanoski/react-redux-notes-app/tree/hooks/src
 **/
function App() {
  return (
    <Router>
      <div>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/todo">Todo</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
        </ul>
        <Switch>
          <Route exact path="/">
            <NotesApp />
          </Route>
          <Route path="/todo">
            <Todo />
          </Route>
          <Route path="/about">
            <About />
          </Route>
        </Switch>
      </div>
    </Router >
  );
}

const About = () => {
  return <div>About</div>
}
const Todo = () => {
  return <div>Todo</div>
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
