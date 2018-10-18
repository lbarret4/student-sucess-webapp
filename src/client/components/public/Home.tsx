import * as React from 'react';
import { isLoggedIn } from '../../utils/api';
import { Link } from 'react-router-dom';

export default class Home extends React.Component<any, IHomeState>{
    render() {
        return (
            <main className="py-5">
                {isLoggedIn() ?
                    <div className="container py-5" style = {{ marginLeft: "200px" }}>
                        <h1 className="text-center">Welcome to the Covalence Student Success App!</h1>
                        <h2 className="text-center">Using this app, you'll be able to do things and such!</h2>
                        <h3 className="text-center">Get started by  <Link to="/register">registering</Link> or by loging in through the Navbar!</h3>
                    </div>
                    :
                    <div className="container py-5">
                        <h1 className="text-center">Welcome to the Covalence Student Success App!</h1>
                        <h2 className="text-center">Using this app, you'll be able to do things and such!</h2>
                        <h3 className="text-center">Get started by  <Link to="/register">registering</Link> or by loging in through the Navbar!</h3>
                    </div>}

            </main>
        );
    }
}

interface IHomeState {
}