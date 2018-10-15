import * as React from 'react';
import { RouteComponentProps } from 'react-router-dom';
export class EmployerForm extends React.Component<RouteComponentProps, any>{
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