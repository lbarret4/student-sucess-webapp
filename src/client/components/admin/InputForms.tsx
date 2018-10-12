import * as React from 'react';
import { RouteComponentProps } from 'react-router-dom';


export default class FormTabs extends React.Component<IFormTabsProps, IFormTabsState> {

    constructor(props: any) {
        super(props);
        this.state = {
            tabs: {
                networkForm: false,
                interviewForm: true,
                applicationForm: false,
                summaryForm: false
            }


        };
    }
    handlesClick = (e: any) => {
        e.preventDefault();
        let title = e.target.id;

        //@ts-ignore       
        let tabs: any = Object.assign({}, this.state.tabs);
        for (let tab in tabs) {

            if (tab === title) {
                tabs[tab] = true;
                console.log(tab);
                console.log(tabs);
                console.log('Title: ', title);
                console.log('Selected: ', tabs[tab]);
            } else {
                tabs[tab] = false;
            }
        }
        this.setState({
            tabs
        });

    }


    render() {

        let tabName = Object.getOwnPropertyNames(this.state.tabs);
        let tabs: any = this.state.tabs;
        let activeTab = () => {
            for (let tab in tabs) {

                if (tabs[tab]) {
                    return <TextField text={tab} />
                }
            }
        };

        return (
            <main className='py-5'>
                <div className="container py-5">
                    <div className="card text-center" >
                        <div className="card-header">
                            <ul className="nav nav-tabs card-header-tabs">
                                <li className="nav-item">
                                    <a className={`nav-link ${this.state.tabs.networkForm ? 'active' : ''}`} id={`${tabName[0]}`} onClick={this.handlesClick}>{`${tabName[0]}`} </a>
                                </li>
                                <li className="nav-item">
                                    <a className={`nav-link ${this.state.tabs.interviewForm ? 'active' : ''}`} id={`${tabName[1]}`} onClick={this.handlesClick} href="#">{`${tabName[1]}`}</a>
                                </li>
                                <li className="nav-item">
                                    <a className={`nav-link ${this.state.tabs.applicationForm ? 'active' : ''}`} id={`${tabName[2]}`} onClick={this.handlesClick} href="#">{`${tabName[2]}`}</a>
                                </li>
                                <li className="nav-item">
                                    <a className={`nav-link ${this.state.tabs.summaryForm ? 'active' : ''}`} id={`${tabName[3]}`} onClick={this.handlesClick} href="#">{`${tabName[3]}`}</a>
                                </li>
                            </ul>
                        </div>
                        {activeTab()}
                    </div >
                </div>
            </main>
        );
    }

}


interface IFormTabsProps extends RouteComponentProps { }
interface IFormTabsState {
    tabs: {
        networkForm: boolean,
        interviewForm: boolean,
        applicationForm: boolean,
        summaryForm: boolean
    }


}

class TextField extends React.Component<any, any>{
    constructor(props: any) {
        super(props);
    }
    render() {
        return (
            <div className="card-body">
                <h5 className="card-title">Special title treatment {this.props.text}</h5>
                <p className="card-text">With supporting text below as a natural lead-in to additional content.</p>
                <a href="#" className="btn btn-primary">Go somewhere</a>
            </div>
        );
    }

}