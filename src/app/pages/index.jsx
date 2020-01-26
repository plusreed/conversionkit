import React, { Suspense } from 'react';

import Fallback from '../components/Fallback';

const Header = React.lazy(() => import('../components/Header'));
const Dec2Bin = React.lazy(() => import('../components/Dec2Bin'));
const Bin2Dec = React.lazy(() => import('../components/Bin2Dec'));
const Dec2Hex = React.lazy(() => import('../components/Dec2Hex'));

const Index = () => (
    <Suspense fallback={<Fallback text={"Waiting for ConversionCore interfaces..."} />}>
        <Header />
        <Dec2Bin />
        <Bin2Dec />
        <Dec2Hex />
        <div className="pl-4 font-normal text-sm text-gray-600">
            <p>Suggestions? Post them on our <a href="//ckfider.herokuapp.com" className="text-blue-600">Fider instance</a>.</p>
        </div>
    </Suspense>
);

export default Index;
