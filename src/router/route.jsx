import React, {Component} from 'react';
import createHistory from "history/createBrowserHistory";
import {
    Router,
    Route,
    Link,
    hashHistory,
} from 'react-router-dom';


import ComponentHeader from '../components/header/header.jsx';
import ComponentFooter from '../components/footer/footer.jsx';
import Index from '../pages/index/index.jsx';
import Contest from '../pages/contest/index.jsx';
import Procedure from '../pages/procedure/index.jsx';

import Launch from '../pages/launch/index.jsx';
import About from '../pages/about/index.jsx';  

import PageRegister from '../pages/register/index.jsx';
const history = createHistory();

// console.log(history);
const RouteConfig = ()=>(
    <Router history={history}>
            <div>
                <ComponentHeader />
                <Route exact path="/" component={Index} />
                <Route path="/contest" component={Contest} />
                <Route path="/register" component={PageRegister} />
                <Route path="/procedure" component={Procedure} />
                <Route path="/about" component={About} />
                <Route path="/launch" component={Launch} />
                <ComponentFooter />
            </div>
    </Router>
);

export default RouteConfig;

