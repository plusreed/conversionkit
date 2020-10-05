import React from 'react';

const Header = props => (
    <>
        <div className="h-auto p-2 bg-gray-900 pl-4">
            <h1 className="font-bold text-white text-xl">{props.text || "ConversionKit"}</h1>
        </div>
    </>
);

export default Header;