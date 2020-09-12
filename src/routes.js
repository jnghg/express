import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import App from './App';
import { Provider } from 'mobx-react';
import stores from './stores';

const Routes = () => (
    <Provider {...stores}>
        <BrowserRouter>
            <App/>
        </BrowserRouter>
    </Provider>
);

export default Routes;