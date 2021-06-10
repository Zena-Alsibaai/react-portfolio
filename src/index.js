import React from 'react';
import ReactDom from 'react-dom';
import App from './App';
import './style/index.scss';
import { BrowserRouter as Router} from 'react-router-dom';

ReactDom.render (
    <Router>
        <App/>
    </Router>,
    document.getElementById('root')
);