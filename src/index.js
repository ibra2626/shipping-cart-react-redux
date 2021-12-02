import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux'

import 'bootstrap/dist/css/bootstrap.min.css';

import configureStore from './redux/reducers/configureStore';
import App from './components/root/App';

const store = configureStore();


ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>
    ,
    document.getElementById('root')
);
