import React from 'react'
import { Route, IndexRoute } from 'react-router';

import App from './containers/app/App';

import Home from './containers/home/Home';
import Users from './containers/user/Users';

import NotFound from './containers/misc/NotFound';
import Forbidden from './containers/misc/Forbidden';
import Unauthorized from './containers/misc/Unauthorized';

export const routes = (
    <div>
        <Route path="/" component={App}>
            <Route path="/403" component={Forbidden}/>
            <Route path="/401" component={Unauthorized}/>
            <Route path="/404" component={NotFound}/>

            <IndexRoute component={Home}/>

            <Route path="/users" component={Users}/>

            <Route path="*" component={NotFound}/>
        </Route>
    </div>
);