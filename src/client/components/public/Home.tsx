import * as React from 'react';
import { isLoggedIn } from '../../utils/api';
import { Link } from 'react-router-dom';

export default class Home extends React.Component<any, IHomeState>{
    render() {
        return (
            <main className="py-5">
                {isLoggedIn() ?
                    <div>
                        {this.props.history.push('/dashboard')}
                    </div>
                    :
                    <div className="container py-5">
                        <h1 className="text-center">Welcome to the Covalence Student Success App!</h1>
                        <div className="text-center">Using this app, you'll be able to schedual interviews, meeting, and many other things.</div>
                        <div className="text-center">Use your GitHub user ID to track how many commits you've made each week.</div>
                        <div className="text-center">Display your most recent blog post and stay on track with daily and weekly check lists!</div>
                        <div className="text-center">Take control of your Covalence Experiance and set yourself up for succsess!</div>
                        <div className="text-center">Get started by <Link to="/register">registering</Link> or by loging in through the Navbar!</div>
                    </div>}

            </main>
        );
    }
}

interface IHomeState {
}