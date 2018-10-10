

import * as React from 'react';
import { Route, Redirect,RouteProps, RouteComponentProps } from 'react-router-dom';
import {AccessToken,User,ClearAccessToken} from '../../utils/api';


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


const isLoggedIn= (role?:string)=>{
        if(role){
            console.log('user role',User.role);
            return (AccessToken != null && User.role == role);
        }
        console.log(AccessToken);
    return AccessToken != null;
}

/*  Test scripts 
    console.log('print access token');
    console.log(isLoggedIn());
    console.log('guest',isLoggedIn('guest'));
    console.log('admin',isLoggedIn('admin'));
    console.log("clear",ClearAccessToken());
    console.log(isLoggedIn()); */