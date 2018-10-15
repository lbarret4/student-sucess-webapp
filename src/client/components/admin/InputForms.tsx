import * as React from 'react';
import { Route } from 'react-router'
import { RouteComponentProps } from 'react-router-dom';
import NavTabs from './Forms/NavTabs';
import { NetworkForms,SummaryForms, Interview, Application } from "./Forms";

export default class InputForms extends React.Component<RouteComponentProps> {

    render() {
        let formTabs: string[] = ['Network', 'Interview', 'Application', 'Summary'];
        return (
            <main className='py-5'>
                <div className="container py-5">
                    <div className="card text-center" >
                        <NavTabs formTabs={[...formTabs]} />
                        <Route exact path={`${this.props.match.path}`} component={NetworkForms} />
                        <Route  path={`${this.props.match.path}/Interview`} component={Interview} />
                        <Route  path={`${this.props.match.path}/Application`} component={Application} />
                        <Route exact path={`${this.props.match.path}/Summary`} component={SummaryForms} />
                    </div >
                </div>
            </main >
        );
    }

}