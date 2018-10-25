
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
            quote: {},
        };
    }

    async componentWillMount() {
        // let blogs = await json('/api/q/blogsauthors');
        //
        // // fetches the quote of the day
        // //
            try {
                let res = await fetch(`http://quotes.rest/qod`, { headers: { 'Accept': "application/json" } });
                let someCrap = await res.json();
                let quote = await someCrap.contents.quotes[0];
                this.setState({
                    quote
                });
            } catch (error) {
                console.log(error);
            }
          

        // // this.setState({
        //     blogs,
        // });
    }

    render() {
        return (
            <main className="py-5" style={{ marginLeft: "200px" }}>
                <div className="container py-5 text-center ">
                    <p>
                        <h2>Quote of the Day</h2>
                   <h3>"{this.state.quote.quote}"</h3>
                   <h6> - {this.state.quote.author}</h6>
                   <p style={{fontSize: "xx-small"}}>courtesy of https://theysaidso.com/api/</p>
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
    quote: any
}