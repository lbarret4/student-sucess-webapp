import * as React from 'react';
import { RouteComponentProps, Link } from 'react-router-dom';

import Alert, { MessageTypes } from '../shared/Alert';
import json, { SetAccessToken } from '../../utils/api';

export default class Register extends React.Component<IRegisterProps, IRegisterState>{

    constructor(props: IRegisterProps) {
        super(props);
        this.state = {
            user: {
                firstname: '',
                lastname: '',
                dob: '',
                city: '',
                state: '',
                email: '',
                password: '',
            },
            github: '',
            today: 0,
            tooYoung: false,
        };
    }

    private registering = false;

    componentWillMount() {
        this.setState({ today: Date.now() }) //sets this.today = to today's date in milliseconds passed since january 1st 1970
    }

    calucalteTime() {
        let birthday = Date.parse(`${this.state.user.dob}`); //turns the provided date of birth into a number of milliseocds that have passed since january 1st 1970
        let today = this.state.today; // today's date in milliseconds, as previously stated
        let result = (today - birthday) / 31540000000; // today's date in milliseconds, minus the user's birthday in milliseconds, divided by the total number of milliseconds in one year, (not accounting for leap years)
        return result // returns a number to be measured against the number 21, the minumum age requiered to register with the site.
    }

    RegisterUser = async (e: React.FormEvent<HTMLFormElement>) => {

        e.preventDefault();

        if (this.registering) return;
        let ageConfirmation = this.calucalteTime();
        if (ageConfirmation >= 21) {
            this.registering = true;
            try {
                let token = await json('/auth/register',
                    'POST',
                    this.state.user
                );
                SetAccessToken(token.token, token.user);
                await json(`/api/github/`, 'POST', {
                    userid: token.user.userid,
                    github_link: this.state.github
                })
                this.props.history.push('/dashboard');
                window.location.reload();
            } catch (e) {
                console.log(e);
            } finally {
                this.registering = false;
            }
        } else {
            this.setState({ tooYoung: true })
        }

    }

    render() {

        let alert;
        if (this.state.tooYoung) {
            alert = <Alert message="You are too young to use this site. The minimum requierment is 21 years of age." messageType={MessageTypes.Error}></Alert>;
        } else {
            alert = null;
        }

        return (
            <main className="py-5">
                <div className="container py-5">
                    <div className="row">
                        <div className="col-md-4 offset-md-4">
                            {alert}
                        </div>
                    </div>
                    <form className="row" onSubmit={this.RegisterUser}>
                        <div className="col-md-4 offset-md-4">
                            <div className="form-row">
                                <div className="col form-group">
                                <label htmlFor="First">First Name</label>
                                    <input id="First" type="text" className="form-control" placeholder="John" onChange={(e) => {
                                            let other = JSON.parse(JSON.stringify(this.state.user));
                                            delete other.firstname;
                                        this.setState({
                                            user: {
                                                firstname: e.target.value,
                                              ...other
                                            }                                
                                            
                                        })
                                    }} required />
                                </div>
                            </div>
                            <div className="form-row">
                                <div className="col form-group">
                                <label htmlFor="Last">Last Name</label>
                                    <input id="Last" type="text" className="form-control" placeholder="Doe" onChange={(e) => {
                                            let other = JSON.parse(JSON.stringify(this.state.user));
                                            delete other.lastname;
                                        this.setState({
                                            user: {
                                                lastname: e.target.value,
                                              ...other
                                            }                                
                                            
                                        })
                                    }} required />
                                </div>
                            </div>
                            <div className="form-row">
                                <div className="col form-group">
                                <label htmlFor="DoB">Date of Birth</label>
                                    <input id="DoB" type="text" className="form-control" placeholder="MM/DD/YYYY" onChange={(e) => {
                                            let other = JSON.parse(JSON.stringify(this.state.user));
                                            delete other.dob;
                                        this.setState({
                                            user: {
                                                dob: e.target.value,
                                              ...other
                                            }                                
                                            
                                        })
                                    }} required />
                                </div>
                            </div>
                            <div className="form-row">
                                <div className="col form-group">
                                <label htmlFor="City">City</label>
                                    <input id="City" type="text" className="form-control" placeholder="Montgomery" onChange={(e) => {
                                            let other = JSON.parse(JSON.stringify(this.state.user));
                                            delete other.city;
                                        this.setState({
                                            user: {
                                                city: e.target.value,
                                              ...other
                                            }                                
                                            
                                        })
                                    }} required />
                                </div>
                            </div>
                            <div className="form-row">
                                <div className="col form-group">
                                <label htmlFor="State">State ID</label>
                                    <input id="State" type="text" className="form-control" placeholder="AL" onChange={(e) => {
                                            let other = JSON.parse(JSON.stringify(this.state.user));
                                            delete other.state;
                                        this.setState({
                                            user: {
                                                state: e.target.value,
                                              ...other
                                            }                                
                                            
                                        })
                                    }} required />
                                </div>
                            </div>
                            <div className="form-row">
                                <div className="col form-group">
                                <label htmlFor="github">GitHub User Name</label>
                                    <input id="github" type="text" className="form-control" placeholder="GitHub User Name" onChange={(e) => { this.setState({ github: e.target.value }) }} required />
                                </div>
                            </div>
                            <div className="form-row">
                                <div className="col form-group">
                                <label htmlFor="email">Email Adress</label>
                                    <input id="email" type="text" className="form-control" placeholder="test@test.com" onChange={(e) => {
                                            let other = JSON.parse(JSON.stringify(this.state.user));
                                            delete other.email;
                                        this.setState({
                                            user: {
                                                email: e.target.value,
                                              ...other
                                            }                                
                                            
                                        })
                                    }} required />
                                </div>
                            </div>
                            <div className="form-row">
                                <div className="col form-group">
                                <label htmlFor="password">Password</label>
                                    <input id="password" type="password" className="form-control" placeholder="Password" onChange={(e) => {
                                            let other = JSON.parse(JSON.stringify(this.state.user));
                                            delete other.password;
                                        this.setState({
                                            user: {
                                                password: e.target.value,
                                              ...other
                                            }                                
                                            
                                        })
                                    }} required />
                                </div>
                            </div>
                            <div className="form-row form-group">
                                <div className="col">
                                    <button className="btn btn-primary btn-lg w-100">Register</button>
                                </div>
                            </div>
                            <div className="form-row">
                                <div className="col">
                                    Already have an account? <Link to="/login">Log in!</Link>
                                </div>
                            </div>
                        </div>
                    </form>
                </div>
            </main>
        );
    }
}

interface IRegisterProps extends RouteComponentProps { }
interface IRegisterState {
    user: { firstname: string, lastname: string, dob: string, city: string, state: string, email: string, password: string }
    github: string;
    today: number;
    tooYoung: boolean
}
