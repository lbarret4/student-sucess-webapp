import * as React from 'react';
import json, { User } from '../../utils/api';
import { Link, RouteComponentProps } from 'react-router-dom';
import { isLoggedIn } from '../../utils/api';

export default class Navbar extends React.Component<any, IRegisterState> {

    constructor(props: any) {
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
            image: '',
        };
    }

    componentWillMount() {
        json(`/api/users/${User.userid}`)
        .then( user => this.setState({
            firstname: user.firstname,
            lastname: user.lastname,
            dob: user.dob,
            city: user.city,
            usstate: user.state,
            github: user.github,
            image: user.image
        }));
        
    }



    render() {
        if (this.state.image) {

        } else {
            this.setState({ image: "https://i.kym-cdn.com/photos/images/original/000/828/088/9a6.php" })
        }

        if (isLoggedIn()) {
            return (
                <main className="py-5" style={{float: "left"}}>
                    <div className="sidenav d-flex flex-column align-items-start" style={{ height: "100%", width: "200px", position: "fixed", zIndex: "auto", top: "20", left: "0", backgroundColor: "#0091ea", overflowX: "hidden", paddingTop: "20px", color: "white"}}>
                        <img src={this.state.image} height="200px" style={{ display: "block", marginLeft: "auto", marginRight: "auto" }} />
                        <div style={{ marginLeft: "auto", marginRight: "auto" }}>Name: {this.state.firstname} {this.state.lastname}</div>
                        <div style={{ marginLeft: "auto", marginRight: "auto" }}>Birthday: {this.state.dob}</div>
                        <div style={{ marginLeft: "auto", marginRight: "auto" }}>{this.state.city}, {this.state.usstate}</div>
                        <div style={{ marginLeft: "auto", marginRight: "auto" }}>{this.state.firstname}'s GitHub: {}
                            <a href={`https://github.com/${this.state.github}`} style={{ color: "white" }}>Link</a>
                        </div>
                        <Link to="/EditProfile" id="Edit" className="btn btn-dark border-dark" style={{ marginLeft: "auto", marginRight: "auto", color: "white" }} href="#">Edit Profile</Link>
                    </div>
                    <div className="container py-5">

                    </div>
                    {console.log(User)}
                </main>
            );
        } else {
            return(
            <div></div> );
        }
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
}
