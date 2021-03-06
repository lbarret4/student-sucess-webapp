import * as React from 'react';
import { RouteComponentProps } from 'react-router-dom';
import { FormikActions } from 'formik';

import json, { User } from '../../utils/api';
import Alert, { MessageTypes } from '../shared/Alert';

const ALERT_SUCCESS = <Alert message="Post saved successfully!" messageType={MessageTypes.Success}></Alert>
const ALERT_ERROR = <Alert message="There was an error saving your post :(" messageType={MessageTypes.Error}></Alert>

export default class Compose extends React.Component<IComposeProps, IComposeState> {

    constructor(props: any) {
        super(props);
        this.state = {
            body: '',
            saveStatus: null

        }
    }

    private alert: JSX.Element = null;
    private saving: boolean = false;

    SaveBlog = async (e: React.FormEvent<HTMLFormElement>) => {

        e.preventDefault(); //don't do a form submission since we call an api

        if (this.saving) return;

        try {
            this.saving = true;
            let result = await json('/api/jobactivities', 'POST', {
                activity_content: this.state.body
            });

            let results2 = await json(`/api/useractivites/`, 'POST', {
                userid: User.userid,
                activityid: await result.id
            });
            if (result) {
                this.setState({ 
                    saveStatus: 'success',
                    body:''
             });
         
            } else {
                this.setState({ saveStatus: 'error' })
            }
        } catch (e) {
            console.log(e);
            this.setState({ saveStatus: 'error' });
        } finally {
            this.saving = false;
        }
    }

    render() {

        if (!this.state.saveStatus) {
            this.alert = null;
        } else {
            this.alert = this.state.saveStatus === 'success' ? ALERT_SUCCESS : ALERT_ERROR;
        }

        return (
            <main className="py-5">
                <div className="container ">
                    <div className="row">
                        <div className="col-md-4 offset-md-4">
                            {alert}
                        </div>
                    </div>
                    <div className="row">
                        <form className="col-md-6 offset-md-3" onSubmit={this.SaveBlog}>
                            <div className="form-row">
                                <div className="col form-group">
                                    <textarea className="form-control" placeholder="Description of Activity" onChange={(e) => { this.setState({ body: e.target.value }) }} value={this.state.body} required />
                                </div>
                            </div>
                            <div className="form-row form-group">
                                <div className="col">
                                    <button className="btn btn-primary btn-lg w-100" >Publish</button>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </main>
        );
    }
}

interface IComposeProps extends RouteComponentProps { }
interface IComposeState {
    body?: string;
    saveStatus?: string;
}