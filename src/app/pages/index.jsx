import React, { Suspense } from 'react';

const Header = React.lazy(() => import('../components/Header'));
const BinaryConverter = React.lazy(() => import('../components/BinaryConverter'));
const DecimalConverter = React.lazy(() => import('../components/Bin2Dec'));

const Index = () => (
    <Suspense fallback={<h1>Waiting for ConversionCore...</h1>}>
        <Header />
        <BinaryConverter />
        <DecimalConverter />
    </Suspense>
);

export default Index;
