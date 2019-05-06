import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux'
import { Router } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import store from './_helper/store';
import history from './_helper/history';

ReactDOM.render(
<Provider store={store}>
    <Router history={history}> 
        <App /> 
    </Router>
</Provider>, document.getElementById('root'));
console.log("Created By RahulPpatidar");

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
