

import * as React from 'react';
import { Route, Redirect,RouteProps, RouteComponentProps } from 'react-router-dom';
import {isLoggedIn } from '../../utils/api';


const PrivateRoute = (props:IPrivateRouteProps) => {
    const Component = props.component;
    const propsToPass = Object.assign({}, props);
    delete propsToPass.component;
    
    return (
        <Route {...propsToPass} render={props => (
            isLoggedIn() ? (
                <Component {...props} />
            ) : (
                <Redirect to={{
                    pathname: '/login',
                    state: { from: props.location }
                }} />
            )
        )} />
    );
};

export default PrivateRoute;

interface IPrivateRouteProps extends RouteProps {
    component: React.ComponentType< RouteComponentProps<any>>| React.ComponentType<any>
} 

