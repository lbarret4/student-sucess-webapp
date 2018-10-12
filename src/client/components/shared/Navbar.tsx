import * as React from 'react';
import json, { User } from '../../utils/api';
import { Link, RouteComponentProps } from 'react-router-dom';
import { isLoggedIn } from '../../utils/api';
import Login from '../admin/Login';

export default class Navbar extends React.Component<any, INavState> {

    constructor(props: any) {
        super(props);
        this.state = {
            name: 'Placeholder',
        }
    }

    async getName(id: number) {
        let user = await json(`/api/users/${id}`);
        this.setState({
            name: user.firstname
        });
    }

    render() {
        if (isLoggedIn()) {
            this.getName(User.userid)
        }
        return (
            <nav className="navbar navbar-expand-lg navbar-dark bg-primary fixed-top">
                {isLoggedIn() ? <Link to="/profile" className="navbar-brand" href="#"> Welcome, {this.state.name}!</Link> : <Link to="/" className="navbar-brand" href="#">Covalence Student Success App</Link>}
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarText" aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarText">
                    <ul className="navbar-nav ml-auto">
                        <li className="nav-item active">
                            <Link to="/" className="nav-link" href="#">Home <span className="sr-only">(current)</span></Link>
                        </li>
                        <li className="nav-item">
                            {isLoggedIn() ? <Link to="/logout" className="btn btn-success" href="#">Logout</Link> : <Link to="/login" id="Login" className="btn btn-success" href="#">Login</Link>}
                        </li>
                    </ul>
                </div>
            </nav>
        );
    }
}


interface INavState {
    name: string;
}