import React, { Suspense, StrictMode } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import Fallback from './components/Fallback';

const Index = React.lazy(() => import('./pages/index'));
const WhyUse = React.lazy(() => import('./pages/WhyUse'));
const NotFound = React.lazy(() => import('./pages/404'));
const UpdateToast = React.lazy(() => import('./components/UpdateToast'));

const Routes = () => (
    <StrictMode>
        <Suspense fallback={<Fallback text={"Loading ConversionKit..."} />}>
            <Router basename={process.env.NODE_ENV === 'production' ? '/bintool' : ''}>
                <Switch>
                    <Route path="/" exact component={Index} />
                    <Route path="/why-use" exact component={WhyUse} />
                    <Route component={NotFound} />
                </Switch>
            </Router>
            <UpdateToast />
        </Suspense>
    </StrictMode>
);

export default Routes;