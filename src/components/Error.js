import React from 'react'
import { Link } from 'react-router-dom';
// Component for a bad url in the application.
export const Error = () => {
    return (
        <div className="container">
            <h2 className="section-title">oops! it's a dead end</h2>
            <Link to='/' className='btn'>back home</Link>
        </div>
    )
}
