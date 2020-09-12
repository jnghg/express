import React from 'react';
import ReactDOM from 'react-dom';
import Routes from './routes';
import stores from './stores';

ReactDOM.render(<Routes {...stores}/>, document.getElementById('root'));
