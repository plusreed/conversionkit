import React, { Suspense } from 'react';

const Header = React.lazy(() => import(/* webpackChunkName: "Header.component.dll" */'../components/Header'));
const BinaryConverter = React.lazy(() => import(/* webpackChunkName: "Dec2Bin.component.dll" */'../components/BinaryConverter'));
const DecimalConverter = React.lazy(() => import(/* webpackChunkName: "Bin2Dec.component.dll" */'../components/Bin2Dec'));

const Index = () => (
    <Suspense fallback={<h1>Waiting for ConversionCore...</h1>}>
        <Header />
        <BinaryConverter />
        <DecimalConverter />
    </Suspense>
);

export default Index;
