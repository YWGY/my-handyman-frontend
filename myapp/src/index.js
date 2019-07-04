import axios from 'axios';
import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';

import 'bootstrap/dist/css/bootstrap.css';
import './styles/index.scss';
import App from './App';

axios.defaults.baseURL = 'https://booking-management-database.herokuapp.com/v1';

const baseURL = process.env.PUBLIC_URL || '';

ReactDOM.render(
  <Router basename={baseURL}>
    <App />
  </Router>,
  document.getElementById('root')
);



