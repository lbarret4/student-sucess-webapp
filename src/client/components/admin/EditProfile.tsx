import * as React from 'react';
import json, { User } from '../../utils/api';
import { Link, RouteComponentProps } from 'react-router-dom';
import { isLoggedIn } from '../../utils/api';

import Alert, { MessageTypes } from '../shared/Alert';

export default class Navbar extends React.Component<any, IRegisterState> {

    constructor(props: any) {
        super(props);
        this.state = {
            firstname: 'JimJim',
            lastname: 'MacGee',
            dob: '01/02/1993',
            city: 'New York City',
            usstate: 'NY',
            email: 'jimjim@test.com',
            github: 'JimJimMac',
            password: 'Potat0s',
            today: 0,
            tooYoung: false,
            image: '',
            passwordConfirmation: '',
        };
    }

    // componentWillMount() {
    //     this.setState({
    //         firstname: User.firstname,
    //         lastname: User.lastname,
    //         dob: User.dob,
    //         city: User.city,
    //         usstate: User.usstate,
    //         github: User.github,
    //     })
    // }

    MakeChanges = async (e: React.FormEvent<HTMLFormElement>) => {

        e.preventDefault();
        if (this.state.password == this.state.passwordConfirmation) {
            try {
                // let token = await json('/auth/register',
                //     'POST',
                //     this.state
                // );
                // this.props.history.push('/dashboard');
            } catch (e) {
                console.log(e);
            }
        } else {
            this.setState({ tooYoung: true })
        }
    }

    render() {
        if (this.state.image == '') {
            this.setState({ image: "https://i.kym-cdn.com/photos/images/original/000/828/088/9a6.php" })
        } else {
            
        }

        let alert;
        if (this.state.tooYoung) {
            alert = <Alert message="The passwords do not match. Please try again." messageType={MessageTypes.Error}></Alert>;
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
                    <form className="row" onSubmit={this.MakeChanges}>
                        <div className="col-md-4 offset-md-4">
                        <div className="form-row">
                                <div className="col form-group">
                                    <input type="text" className="form-control" value={this.state.image} placeholder="Link to desired profile picture" onChange={(e) => { this.setState({ image: e.target.value }) }} />
                                </div>
                            </div>
                            <div className="form-row">
                                <div className="col form-group">
                                    <input type="text" className="form-control" value={this.state.firstname} placeholder="First Name" onChange={(e) => { this.setState({ firstname: e.target.value }) }} required />
                                </div>
                            </div>
                            <div className="form-row">
                                <div className="col form-group">
                                    <input type="text" className="form-control" value={this.state.lastname} placeholder="Last Name" onChange={(e) => { this.setState({ lastname: e.target.value }) }} required />
                                </div>
                            </div>
                            <div className="form-row">
                                <div className="col form-group">
                                    <input type="text" className="form-control" value={this.state.city} placeholder="City" onChange={(e) => { this.setState({ city: e.target.value }) }} required />
                                </div>
                            </div>
                            <div className="form-row">
                                <div className="col form-group">
                                    <input type="text" className="form-control" value={this.state.usstate} placeholder="State" onChange={(e) => { this.setState({ usstate: e.target.value }) }} required />
                                </div>
                            </div>
                            <div className="form-row">
                                <div className="col form-group">
                                    <input type="text" className="form-control" value={this.state.github} placeholder="GitHub User Name" onChange={(e) => { this.setState({ github: e.target.value }) }} required />
                                </div>
                            </div>
                            <div className="form-row">
                                <div className="col form-group">
                                    <input type="text" className="form-control" value={this.state.email} placeholder="Email Adress" onChange={(e) => { this.setState({ email: e.target.value }) }} required />
                                </div>
                            </div>
                            <div className="form-row">
                                <div className="col form-group">
                                    <input type="password" className="form-control" placeholder="Enter Password" onChange={(e) => { this.setState({ passwordConfirmation: e.target.value }) }} required />
                                </div>
                            </div>
                            <div className="form-row form-group">
                                <div className="col">
                                    <button className="btn btn-primary btn-lg w-100">Save Changes</button>
                                </div>
                            </div>
                        </div>
                    </form>
                </div>
            </main>
        );
    }
}

interface IRegisterState {
    firstname: string;
    lastname: string;
    dob: string;
    city: string;
    usstate: string;
    email: string;
    github: string;
    password: string;
    today: number;
    tooYoung: boolean;
    image: string;
    passwordConfirmation: string,
}
