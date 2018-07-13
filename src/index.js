import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import MainContainer from './components/container/MainContainer';
import { Provider } from 'react-redux';
import store from './store';


ReactDOM.render(
    <Provider store={store}>
        <MainContainer />
    </Provider>
    , document.getElementById('root'));
