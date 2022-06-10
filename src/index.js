import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

import {combineReducers, legacy_createStore as createStore} from "redux";
import {counterReducer, incrementAction} from "./counterStore";

import {Provider} from "react-redux";

//function is deprecated

const store = createStore(
    combineReducers({
        count: counterReducer,
    })
)

// console.log(store.getState())
// store.dispatch(incrementAction())
// store.dispatch(incrementAction())
// store.dispatch(incrementAction())
// console.log(store.getState())
// store.subscribe(()=> console.log(store.getState()))


//can also have asynchronous actions
//

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Provider store={store}>
    <App />
  </Provider>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
