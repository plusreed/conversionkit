import React from 'react'
import Spinner from 'react-bootstrap/Spinner'

const Fallback = props => (
    <div className="p-2 mx-auto text-center bg-gray-900 w-auto">
        <h1 className="font-bold text-xl text-gray-100">
            {
                props.text ||
                <Spinner animation="border" role="status">
                    <span className="sr-only">Loading...</span>
                </Spinner>
            }
        </h1>
    </div>
)

export default Fallback
