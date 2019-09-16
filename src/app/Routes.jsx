import React, { Suspense } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

const Index = React.lazy(() => import('./pages/index'));
const WhyUse = React.lazy(() => import('./pages/WhyUse'));
const NotFound = React.lazy(() => import('./pages/404'));

const Routes = () => (
    <Suspense fallback={<h1>Loading</h1>}>
        <Router>
            <Switch>
                <Route path="/" exact component={Index} />
                <Route path="/why-use" exact component={WhyUse} />
                <Route component={NotFound} />
            </Switch>
        </Router>
    </Suspense>
);

export default Routes;