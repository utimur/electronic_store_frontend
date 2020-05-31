import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';
import {Provider} from "react-redux";
import reducer from './reducers/index'
import {createStore, applyMiddleware} from "redux";
import thunk from "redux-thunk";
import axios from 'axios';
import {API_URL} from './config'
import { composeWithDevTools } from 'redux-devtools-extension';

axios.defaults.headers.common['Authorization'] = `Bearer ${localStorage.getItem('token')}`


const store = createStore(reducer, composeWithDevTools(applyMiddleware(thunk)))

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);

