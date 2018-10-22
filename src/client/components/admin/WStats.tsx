import * as React from 'react';
import json, { User } from '../../utils/api';
import { Queries } from '../../../server/db';
import { Route, RouteComponentProps } from 'react-router';
import * as moment from 'moment';


// interface FormValues {
//     commits: string,
//     posts: string,
//     jobsapps: string,
//     netacitivites: string,
//     mockinterviews: string,
//     interviews: string
// }

interface IWStatsState {
    data: any;
    End: any;
    Start: any;
    commits: any;
    jobsapps: any;
    mockinterviews: any;
    interviews: any;
    netactivites: any;
}

interface IWStatsProps {

}

export default class WStats extends React.Component<IWStatsProps, IWStatsState> {
    constructor(props: any) {
        super(props);
        this.state = {
            data: [],
            commits: '',
            Start: moment(),
            End: moment().add(1, 'w').format('YYYY-MM-DD'),
            // posts: '',
            jobsapps: '',
            netactivites: '',
            mockinterviews: '',
            interviews: ''
        }
    };

    async componentWillMount() {
        try {

            let weeklyStats = [];
            let Start = this.state.Start;
            let End = this.state.End;

            let data = await Promise.all(
                [json(`/api/q/commitnumber/${User.userid}/${Start}/${End}`),
                json(`/api/q/numberintweek/${User.userid}/${Start}/${End}`),
                json(`/api/q/numberjobapps/${User.userid}/${Start}/${End}`),
                json(`/api/q/numbermockint/${User.userid}/${Start}/${End}`),
                json(`/api/q/numbernetact/${User.userid}/${Start}/${End}`)
                ])
                
            for (let i of data) {
                for(let obj of i ) {
                    weeklyStats.push(obj);
                }
            }
            console.log(weeklyStats);
             this.setState({ data: weeklyStats, commits: weeklyStats[0].number_commits, jobsapps: weeklyStats[2].userid, netactivites: weeklyStats[4].user, mockinterviews: weeklyStats[3].service_type, interviews: weeklyStats[1]});
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
                            <li className="list-group-item">Blog posts this week</li>
                            <li className="list-group-item">Job applications this week</li>
                            <li className="list-group-item">Networking activities attended this week</li>
                            <li className="list-group-item">Mock interviews this week</li>
                            <li className="list-group-item">Interviews this week</li>
                        </ul>
                    </div>

                    <div className="card mb-3" style={{ maxWidth: "22rem" }}>
                        <ul className="list-group list-group-flush">
                            <li className="list-group-item">{this.state.commits}</li>   
                            {/* <li className="list-group-item">{this.state.data.posts}</li> */}
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