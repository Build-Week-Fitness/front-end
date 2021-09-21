import React from 'react';
import { Route, Redirect } from 'react-router-dom';

const ProtectedInstructorsRoute = ({ component: Component, ...rest }) => {
    return <Route {...rest} render={(props) => {
        if (localStorage.getItem("token") && localStorage.getItem("role") === '1') {
            return <Component {...props} />
        } else {
            return <Redirect to='/login' />
        }

    }} />
}

export default ProtectedInstructorsRoute;