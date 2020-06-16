import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';
import {Provider} from "react-redux";
import reducer from './reducers/index'
import {applyMiddleware, createStore} from "redux";
import thunk from "redux-thunk";
import axios from 'axios';
import {composeWithDevTools} from 'redux-devtools-extension';

const store = createStore(reducer, composeWithDevTools(applyMiddleware(thunk)))
localStorage.setItem("id", 0);

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);

