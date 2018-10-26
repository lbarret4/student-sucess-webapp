
import * as React from 'react';
import json, { User } from '../../utils/api';
import DTasks from './DTasks'
import WTasks from './WTasks'
import DStats from './DStats'
import WStats from './WStats'
import WeeklySummary from './WeeklySummary';
import * as moment from 'moment';
import { format } from 'url';

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
        await this.getCommits();        

            // try {
            //     let res = await fetch(`http://quotes.rest/qod`, { headers: { 'Accept': "application/json" } });
            //     let someCrap = await res.json();
            //     let quote = await someCrap.contents.quotes[0];
            //     this.setState({
            //         quote
            //     });
            // } catch (error) {
            //     console.log(error);
            // }
    }

    async getCommits() {
        try {


            let userid = User.userid;
            let [res1, res2] = await Promise.all([json(`/api/github/find/`, 'POST', { userid }), json(`/api/q/commitnumber/${userid}/`)]);
            let [id, username] = await Promise.all([res1[0]["id"], res1[0]["github_link"]]);
            let { numCommits, lastCommitHash } = await json(`/api/repo/${username}`);
            let hasChecked = false;

            if (await res2.length > 0) {
                let date = moment(await res2.slice(-1)[0]["_created"]).format('YYYY-MM-DD');
                hasChecked = moment(await date).isSame(moment().format('YYYY-MM-DD'), 'day');
            }                   

            let body = { github_id: id, number_commits: numCommits,hash: lastCommitHash.substring(0, 6)};
            let uri = hasChecked ? `/api/commits/${res2.slice(-1)[0]['id']}` : `/api/commits/`;
            let method = hasChecked ? 'PUT' : "POST";   
            let data = await json(uri, method, body);
        } catch (error) {
            console.log(error);
        }
    }

    render() {
        return (
            <main className="py-5" style={{ marginLeft: "200px", backgroundColor: '#eee' }}>
                <div className="container py-5 text-center ">
                    <p>
                        <h2>Quote of the Day</h2>
                        {/* <h3>"{this.state.quote.quote}"</h3>
                        <h6> - {this.state.quote.author}</h6> */}
                        <h2>"Let us think the unthinkable, let us do the undoable, let us prepare to grapple with the ineffable itself, and see if we may not eff it after all."</h2>
                        <h6>- Douglas Adams</h6>
                        <p style={{ fontSize: "xx-small" }}>courtesy of https://theysaidso.com/api/</p>
                    </p>
                    <div className="card-deck d-flex justify-content-center">

                        <DTasks />

                        <WTasks />

                    </div>
                    <WeeklySummary />

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