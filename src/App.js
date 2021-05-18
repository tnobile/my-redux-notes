import './App.css';
import NotesApp from './components/NotesApp';
import { connect } from 'react-redux'

import {
  HashRouter as Router,
  Switch,
  Route,
  NavLink,
  Link
} from "react-router-dom";

/* eslint-disable import/no-webpack-loader-syntax */
import HowTo from '!babel-loader!@mdx-js/loader!./HowTo.mdx'

/** 
 * https://chriscourses.com/blog/redux
 * Redux is simply a library that ensures we follow a certain pattern to update our global state. 
 * https://github.com/hstevanoski/react-redux-notes-app/tree/hooks/src
 **/
function App() {
  return (
    <Router>
      <div>
        <NavBar />
        <Switch>
          <Route exact path="/">
            <NotesApp />
          </Route>
          <Route path="/todo">
            <Todo />
          </Route>
          <Route path="/about">
            <HowTo />
          </Route>
        </Switch>
      </div>
    </Router >
  );
}

const Todo = () => {
  return <div>Todo</div>
}

const NavBar = () => {
  return (
    <ul className="navBar">
      <li>
        <Link to="/">Home</Link>
      </li>
      <li>
        <Link to="/todo">Todo</Link>
      </li>
      <li>
        <NavLink className="about" to="/about">About</NavLink>
      </li>
    </ul>)
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
