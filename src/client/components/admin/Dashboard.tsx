
import * as React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import json from '../../utils/api';

import BlogListItem from '../shared/BlogListItem';
import DTasks from './DTasks'
import WTasks from './WTasks'
import DStats from './DStats'
import WStats from './WStats'

export default class Dashboard extends React.Component<any, IDashboardState> {

    constructor(props: any) {
        super(props);
        this.state = {
            username: '',
            blogs: [],
            quote: [],
        };
    }

    async componentWillMount() {
        let blogs = await json('/api/q/blogsauthors');
        //
        // fetches the quote of the day
        //
        // await fetch('http://quotes.rest/qod.json') 
        //     .then(res => res.json())
        //     .then(ob => this.setState({ quote: ob }))
        
        this.setState({
            blogs,
        });
    }

    render() {
        return (
            <main className="py-5">
                <div className="container py-5 text-center ">
                    <p>Random Quote:
                    <div>{this.state.quote}</div>
                    </p>
                    <div className="card-deck d-flex justify-content-center">

                        <DTasks />

                        <WTasks />

                    </div>

                    <DStats />

                    <WStats />

                </div>
            </main>
        );
    }
}

interface IDashboardState {
    username: string;
    blogs: { id: number, title: string, publishedts: Date, firstname: string, lastname: string }[]
    quote: [],
}