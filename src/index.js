import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import 'bootstrap/dist/css/bootstrap.css';
import reportWebVitals from './reportWebVitals';
import { Provider } from 'react-redux'

// traditional
//import store from './redux/store/store'
// redux-toolkit
import store from './redux/store/index'



// cmd + option + j
// store.getState() 
// store.dispatch({ type: 'ADD_POST', payload: { id: 1, title: 'How to Use Redux' } })
window.store = store;

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
