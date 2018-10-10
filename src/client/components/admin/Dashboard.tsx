
import * as React from 'react';
import json from '../../utils/api';

import BlogListItem from '../shared/BlogListItem';

export default class Dashboard extends React.Component<any, IDashboardState> {

    constructor(props: any) {
        super(props);
        this.state = {
            username: '',
            blogs: []
        };
    }

    async componentWillMount() {
        let blogs = await json('/api/q/blogsauthors');
        this.setState({
            blogs
        });
    }

    render() {
        return (
            <main className="py-5">
                <div className="container py-5 text-center">

                    <h3>Here's a list of Daily Tasks</h3>
                    <div className="card">
                        <div className="card-body">
                            <div>
                                <input type="checkbox" id="dtask1" />
                                <label htmlFor="dtask1">Daily Task 1</label>
                            </div>
                            <div>
                                <input type="checkbox" id="dtask2" />
                                <label htmlFor="dtask1">Daily Task 2</label>
                            </div>
                            <div>
                                <input type="checkbox" id="dtask3" />
                                <label htmlFor="dtask1">Daily Task 3</label>
                            </div>
                            <div>
                                <input type="checkbox" id="dtask4" />
                                <label htmlFor="dtask1">Daily Task 4</label>
                            </div>
                        </div>
                    </div>
                    <h3>Here's a list of Weekly Tasks</h3>
                    <div className="card">
                        <div className="card-body">
                            <div>
                                <input type="checkbox" id="wtask1" />
                                <label htmlFor="wtask1">Weekly Task 1</label>
                            </div>
                            <div>
                                <input type="checkbox" id="wtask2" />
                                <label htmlFor="wtask1">Weekly Task 2</label>
                            </div>
                        </div>
                    </div>
                </div>
            </main>
        );
    }
}

interface IDashboardState {
    username: string;
    blogs: { id: number, title: string, publishedts: Date, firstname: string, lastname: string }[]
}