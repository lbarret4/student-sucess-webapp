
import * as React from 'react';
import json, { User } from '../../utils/api';
import DTasks from './DTasks'
import WTasks from './WTasks'
import DStats from './DStats'
import WStats from './WStats'
import WeeklySummary from './WeeklySummary';

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
        // fetches the quote of the day
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
    }

    async getCommits(){
        let results = await json(`/api/github/find/`,'POST',{userid:User.userid});
        let [id,username] = await Promise.all([results[0]["id"],results[0]["github_link"]]);
        let  {numCommits,lastCommitHash} = await json(`/api/repo/${'mstringer88' }`);
        let data = await json(`/api/commits/`,'POST',{github_id:id,number_commits:numCommits,hash:lastCommitHash.substring(0,6)});      
    }

    render() {
        return (
            <main className="py-5" style={{ marginLeft: "200px",backgroundColor:'#eee' }}>
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