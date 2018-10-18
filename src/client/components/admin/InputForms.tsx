import * as React from 'react';
import { Route } from 'react-router'
import { RouteComponentProps } from 'react-router-dom';
import NavTabs from './Forms/NavTabs';
import { NetworkForms,SummaryForms, Interview, Application } from "./Forms";
import { CareerServicesForms } from './Forms/CareerServicesForms';

export default class InputForms extends React.Component<RouteComponentProps> {

    render() {
        let formTabs: string[] = ['Network', 'Interview', 'Application','Career Services','Summary'];
        return (
            <main className='py-5' style={{marginLeft: "200px"}}>
                <div className="container py-5">
                    <div className="card text-center" >
                        <NavTabs formTabs={[...formTabs]} />
                        <Route exact path={`${this.props.match.path}`} component={NetworkForms} />
                        <Route  path={`${this.props.match.path}/Interview`} component={Interview} />
                        <Route  path={`${this.props.match.path}/Application`} component={Application} />
                        <Route exact path={`${this.props.match.path}/Summary`} component={SummaryForms} />
                        <Route exact path={`${this.props.match.path}/Career-Services`}  component={CareerServicesForms} />
                    </div >
                </div>
            </main >
        );
    }

}