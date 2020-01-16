import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
// import App from './App';
import Navigation from './Navigation';
import * as serviceWorker from './serviceWorker';

ReactDOM.render(<Navigation LogoTitle ="React Portfolio"/>, document.getElementById('root'));
serviceWorker.unregister();
