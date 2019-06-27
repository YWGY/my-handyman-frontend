import React from 'react';
import ReactDOM from 'react-dom';
import './styles/index.css';
import App from './App.js';
import {Route, BrowserRouter as Router} from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.css';
import axios from "axios";
import * as serviceWorker from './serviceWorker';

// const Root = () =>{
//     return (
//         <BrowserRouter basename='/'>
//             <Route path={`/`} component={App}></Route>
//         </BrowserRouter>
//     )
// }

axios.defaults.baseURL = 'http://localhost:3000/api/v1/';
const baseURL = process.env.PUBLIC_URL || '';



ReactDOM.render(
    <Router basename={baseURL}>
        <App />
    </Router>,
    document.getElementById('root')
    );


// ReactDOM.render(<App />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
