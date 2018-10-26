import * as React from 'react';
import { isLoggedIn } from '../../utils/api';
import { Link } from 'react-router-dom';

export default class Home extends React.Component<any, IHomeState>{
    render() {
        return (
            <main className="py-5">
                {isLoggedIn() ?
                    <div className="container py-5" style={{ marginLeft: "200px" }}>
                        <h1 className="text-center">Welcome to the Covalence Student Success App!</h1>
                        <div className="text-center">Using this app, you'll be able to schedule interviews, meetings, and many other things.</div>
                        <div className="text-center">Use your GitHub user ID to track how many commits you have made each week.</div>
                        <div className="text-center">Display your most recent blog post and stay on track with daily and weekly checklists!</div>
                        <div className="text-center">Take control of your Covalence Experience and set yourself up for success!</div>
                        <div className="text-center">Get started by <Link to="/register">registering</Link> or by logging in through the Navbar!</div>
                    </div>
                    :
                    <div className="container py-5">
                        <h1 className="text-center">Welcome to the Covalence Student Success App!</h1>
                        <div className="text-center">Using this app, you'll be able to schedule interviews, meetings, and many other things.</div>
                        <div className="text-center">Use your GitHub user ID to track how many commits you have made each week.</div>
                        <div className="text-center">Display your most recent blog post and stay on track with daily and weekly checklists!</div>
                        <div className="text-center">Take control of your Covalence Experience and set yourself up for success!</div>
                        <div className="text-center">Get started by <Link to="/register">registering</Link> or by logging in through the Navbar!</div>
                    </div>}

            </main>
        );
    }
}

interface IHomeState {
}