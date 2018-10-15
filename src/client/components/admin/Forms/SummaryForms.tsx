import * as React from 'react';
import { RouteComponentProps } from 'react-router-dom';
import Compose from '../Compose';
export class SummaryForms extends React.Component<RouteComponentProps, any>{
    constructor(props: any) {
        super(props);
    }
    render() {
        return (
            <div className="card-body">
                <h5 className="card-title">Summarize your career activities for this week</h5>
                <Compose {...this.props}/>
            </div>
        );
    }

}