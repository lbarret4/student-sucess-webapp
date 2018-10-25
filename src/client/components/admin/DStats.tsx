import * as React from 'react';
import json, { User } from '../../utils/api';
import { Queries } from '../../../server/db';
import * as moment from 'moment';

interface IDStatsState {
    commits: any;
    Start: any;
    End: any;
}

interface IDStatsProps {

}

export default class DStats extends React.Component<IDStatsProps, IDStatsState> {
    constructor(props: any) {
        super(props);
        this.state = {
            commits: '',
            Start: moment().format('YYYY-MM-DD'),
            End: moment().subtract(1, 'd').format('YYYY-MM-DD')
        }
    }

    async componentWillMount() {
        try {
            let Start = this.state.Start;
            let End = this.state.End;
            // console.log(Start);
            // console.log(End);

            let [dailyStats] = await Promise.all([json(`/api/q/commitnumber/${User.userid}/${Start}/${End}`)]);
            // console.log(dailyStats);
            this.setState({ commits: dailyStats[0].number_commits});
        } catch (e) {
            throw (e);
        }
    }

    render() {
        return (
            <React.Fragment>

                <div className="d-flex justify-content-center">
                    <h3 className="card-header border-dark" style={{ minWidth: "44rem" }}>Daily statistics</h3>
                </div>

                <div className="card-group d-flex justify-content-center">

                    <div className="card mb-3" style={{ maxWidth: "22rem" }}>
                        <ul className="list-group list-group-flush">
                            <li className="list-group-item">Commits today</li>
                        </ul>
                    </div>

                    <div className="card mb-3" style={{ maxWidth: "22rem" }}>
                        <ul className="list-group list-group-flush">
                            <li className="list-group-item">{this.state.commits}</li>
                        </ul>
                    </div>
                </div>
            </React.Fragment>
        )
    }
}