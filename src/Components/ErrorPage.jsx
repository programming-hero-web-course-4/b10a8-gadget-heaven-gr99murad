import React from 'react';
import { NavLink } from 'react-router-dom';

const ErrorPage = () => {
    return (
        <div>
            <h1>404</h1>
            <p className='my-7'>Page Not Found</p>

            <NavLink to='/'
            
            className="btn "
            >

            Go Home
            
            </NavLink>
        </div>
        
    );
};

export default ErrorPage;