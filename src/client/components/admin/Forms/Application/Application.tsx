import * as React from 'react';
import { Route } from 'react-router'
import { RouteComponentProps } from 'react-router-dom';
import {ApplicationForms } from "./index";
import { Fragment } from 'react';
import { EmployerForm } from '../EmployerForm';

export class Application extends React.Component<RouteComponentProps> {

    render() {
        return (
            <Fragment>
                <Route exact path={`${this.props.match.path}`} component={ApplicationForms} />
                <Route exact path={`${this.props.match.path}/EmployerInfo`} component={EmployerForm} />
            </Fragment>

        );
    }

}



