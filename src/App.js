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
        <Link className="left" to="/">Home</Link>
      </li>
      <li>
        <Link className="left" to="/todo">Todo</Link>
      </li>
      <li>
        <NavLink className="right" to="/about">About</NavLink>
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
