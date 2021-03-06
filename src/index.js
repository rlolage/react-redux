import 'babel-polyfill';
import React from 'react';
import {render} from 'react-dom';
import {Router, browserHistory} from 'react-router';
import routes from './routes';
import './styles/styles.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/css/bootstrap-theme.min.css';
import configureStore from './store/configureStore';
import {Provider} from 'react-redux';
import {loadTeams} from './actions/teamActions';

const store = configureStore();
store.dispatch(loadTeams());

render(
    <Provider store={store}>
        <Router history={browserHistory} routes={routes}/>
    </Provider>
    ,
    document.getElementById("app")
);