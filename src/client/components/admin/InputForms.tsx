import * as React from 'react';
import { Switch, Route, Router } from 'react-router'
import { RouteComponentProps } from 'react-router-dom';
import NavTabs from './Forms/NavTabs';
import { NetworkForms, InterviewForms, ApplicationForms, SummaryForms } from "./Forms";

export default class InputForms extends React.Component<RouteComponentProps> {

    render() {
        let formTabs: string[] = ['Network', 'Interview', 'Application', 'Summary'];
        return (
            <main className='py-5'>
                <div className="container py-5">
                    <div className="card text-center" >
                        <NavTabs formTabs={[...formTabs]} />
                        <Route exact path={`${this.props.match.path}`} component={NetworkForms} />
                        <Route exact path={`${this.props.match.path}/Interview`} component={InterviewForms} />
                        <Route exact path={`${this.props.match.path}/Application`} component={ApplicationForms} />
                        <Route exact path={`${this.props.match.path}/Summary`} component={SummaryForms} />
                        < h2>Test</h2>
                    </div >
                </div>
            </main >
        );
    }

}