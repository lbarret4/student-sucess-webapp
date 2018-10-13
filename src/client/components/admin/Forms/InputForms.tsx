import * as React from 'react';
import { Switch, Route, Router } from 'react-router'
import { RouteComponentProps } from 'react-router-dom';
import NavTabs from './NavTabs';


export default class InputForms extends React.Component<RouteComponentProps,any> {




    render() {

        console.log(this.props.match.path);
        return (
            <main className='py-5'>
                <div className="container py-5">
                    <div className="card text-center" >
                        <NavTabs  />       
                        <Route   path={`${this.props.match.path}/Network`}  component={TextField} />
                        <Route strict  path={`${this.props.match.path}/Interview`}  component={TextField} />
                        <Route strict  path={`${this.props.match.path}/Application`}  component={TextField} />
                        <Route strict  path={`${this.props.match.path}/Summary`}  component={TextField} />           
                    </div >
                </div>
            </main >
        );
    }

}




class TextField extends React.Component<RouteComponentProps, any>{
    constructor(props: any) {
        super(props);
    }
    render() {
        return (
            <div className="card-body">
                <h5 className="card-title">Special title treatment {this.props.match.path.substring(1)}</h5>
                <p className="card-text">With supporting text below as a natural lead-in to additional content.</p>
                <a href="#" className="btn btn-primary">Go somewhere</a>
            </div>
        );
    }

}