import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { Router, Route, Switch } from 'react-router';
import createStore from './src/store/createStore';

import  SearchCity  from './src/component/SearchCity';
import City from "./src/component/City";
import {routes} from './src/routes/routes';
import './src/css/extends.scss';

const storeWrapper = createStore();

ReactDOM.render((
    <Provider store={storeWrapper.store}>
        <Router history={storeWrapper.history}>
            <Switch>
                <Route exact path={routes.SEARCH_CITY} component={SearchCity} history={storeWrapper.history}/>
                <Route exact path={routes.CITY_WEATHER_FORECAST(':id')} component={City} />
            </Switch>
        </Router>
    </Provider>), document.getElementById('app'));
