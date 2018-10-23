import * as React from 'react';
import json, { User } from '../../utils/api';
import { Queries } from '../../../server/db';
import * as moment from 'moment';

interface IWStatsState {
    End: any;
    Start: any;
    commits: any;
    jobsapps: any;
    mockinterviews: any;
    interviews: any;
    netactivites: any;
    posts: any
}

interface IWStatsProps {

}

export default class WStats extends React.Component<IWStatsProps, IWStatsState> {
    constructor(props: any) {
        super(props);
        this.state = {
            commits: '',
            Start: /* moment().format('YYYY-MM-DD') */'2018-10-10',
            End: /* moment().add(1, 'w').format('YYYY-MM-DD') */'2018-10-17',
            posts: '',
            jobsapps: '',
            netactivites: '',
            mockinterviews: '',
            interviews: ''
        }
    };

    async componentWillMount() {
        try {
            let Start = this.state.Start;
            let End = this.state.End;
            console.log(Start);
            console.log(End);

            let [WeeklyStats1, WeeklyStats2, WeeklyStats3, WeeklyStats4, WeeklyStats5, WeeklyStats6] = await Promise.all(
                [json(`/api/q/commitnumber/${User.userid}/${Start}/${End}`),
                json(`/api/q/numberintweek/${User.userid}/${Start}/${End}`),
                json(`/api/q/numberjobapps/${User.userid}/${Start}/${End}`),
                json(`/api/q/numbermockint/${User.userid}/${Start}/${End}`),
                json(`/api/q/numbernetact/${User.userid}/${Start}/${End}`),
                json(`https://testing-boiler.herokuapp.com/api/blogs`)
                ])
             
            console.log(WeeklyStats1, WeeklyStats2, WeeklyStats3, WeeklyStats4, WeeklyStats5, WeeklyStats6);
             this.setState({ commits: WeeklyStats1[0].number_commits, jobsapps: WeeklyStats3[0].count, netactivites: WeeklyStats5[0].activitycount, mockinterviews: WeeklyStats4[0].NumMockInt, interviews: WeeklyStats2[0].NumberOfInterviews, posts: WeeklyStats6.length});
        } catch (e) {
            throw (e);
        }
    }


    render() {
        return (
            <React.Fragment>
                <div className="d-flex justify-content-center">
                    <h3 className="card-header border-dark" style={{ minWidth: "44rem" }}>Weekly statistics</h3>
                </div>

                <div className="card-group d-flex justify-content-center">

                    <div className="card mb-3" style={{ maxWidth: "22rem" }}>
                        <ul className="list-group list-group-flush">
                            <li className="list-group-item">Commits this week</li>
                            <li className="list-group-item">Most recent blog post</li>
                            <li className="list-group-item">Job applications this week</li>
                            <li className="list-group-item">Networking activities attended this week</li>
                            <li className="list-group-item">Mock interviews this week</li>
                            <li className="list-group-item">Interviews this week</li>
                        </ul>
                    </div>

                    <div className="card mb-3" style={{ maxWidth: "22rem" }}>
                        <ul className="list-group list-group-flush">
                            <li className="list-group-item">{this.state.commits}</li>   
                            <li className="list-group-item">{this.state.posts}</li>
                            <li className="list-group-item">{this.state.jobsapps}</li>
                            <li className="list-group-item">{this.state.netactivites}</li>
                            <li className="list-group-item">{this.state.mockinterviews}</li> 
                            <li className="list-group-item">{this.state.interviews}</li>
                        </ul>
                    </div>

                </div>
            </React.Fragment>)
    }
}