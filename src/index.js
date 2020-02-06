import React from 'react';
import ReactDOM from 'react-dom';
import './components/Header/styles.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

const Header = () => <header id="main-header">JSHunt</header>

ReactDOM.render(<App />, document.getElementById('root'));
serviceWorker.unregister();

