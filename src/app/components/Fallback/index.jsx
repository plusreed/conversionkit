import React from 'react'

const Fallback = props => (
    <div className="p-2 mx-auto text-center bg-gray-900 w-auto">
        <h1 className="font-bold text-xl text-gray-100">{props.text || "No message passed."}</h1>
    </div>
)

export default Fallback
