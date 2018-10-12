import * as React from 'react';
import { RouteComponentProps, Link } from 'react-router-dom';
import json, { User } from '../../utils/api';
import { isLoggedIn } from '../../utils/api';

export default class Register extends React.Component<IRegisterProps, IRegisterState>{

    constructor(props: IRegisterProps) {
        super(props);
        this.state = {
            firstname: '',
            lastname: '',
            dob: '',
            city: '',
            usstate: '',
            email: '',
            github: '',
            password: '',
            today: 0,
            tooYoung: false,
        };
    }

    componentWillMount() {
        this.setState({
            firstname: User.firstname,
            lastname: User.lastname,
            dob: User.dob,
            city: User.city,
            usstate: User.usstate,
            github: User.github,
        })
    }

    render() {

        return (
            <main className="py-5">
                <div className="sidenav d-flex justify-content-center" style={{ height: "100%", width: "200px", position: "fixed", zIndex: "auto", top: "20", left: "0", backgroundColor: "#0091ea", overflowX: "hidden", paddingTop: "20px", color: "white" }}>
                    <img src="https://i.kym-cdn.com/photos/images/original/000/828/088/9a6.php" height="100px"/>
                </div>
                <div className="container py-5">

                </div>
            </main>
        );
    }
}

interface IRegisterProps extends RouteComponentProps { }
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
    tooYoung: boolean
}
