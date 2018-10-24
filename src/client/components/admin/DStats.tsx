import * as React from 'react';
import json, { User } from '../../utils/api';
import * as moment from 'moment';

interface IDStatsState {
    commits: any;
    hash: any;
    post: string;
    publishedDate: any;
    Start: any;
    End: any;
}

interface IDStatsProps {

}

export default class DStats extends React.Component<IDStatsProps, IDStatsState> {
    constructor(props: any) {
        super(props);
        this.state = {
            commits: 'loading...',
            hash: 'loading...',
            post: 'loading...',
            publishedDate: 'loading...',
            Start: moment().format('YYYY-MM-DD'),
            End: moment().subtract(1, 'd').format('YYYY-MM-DD')
        }
    }

    async componentWillMount() {
        try {

            let Start = this.state.Start;
            let End = this.state.End;
            let id = User.userid;
            let data = await json(`/api/blogs/find`, 'POST', { userid: id });
            let linkBlog = await data[0]["heroku_link"];

            let [
                dailyStats1,
                dailyStats2
            ] = await Promise.all(
                [
                    json(`/api/q/commitnumber/${id}/`),
                    json(`${await linkBlog}`)
                ]);
            this.setState({
                commits: dailyStats1.splice(-1)[0].number_commits,
                hash: dailyStats1.splice(-1)[0].hash,
                post: dailyStats2[1].body,
                publishedDate: moment(dailyStats2[1]["__created"]).format('dddd, MMMM Do YYYY, h:mm a')
            });
        } catch (e) {
            throw (e);
        }
    }

    render() {
        return (
            <div className="dStats d-flex justify-content-center">
                <div className="card mb-3 shadow-lg">
                    <h3 className="card-header border-dark">Daily statistics</h3>
                    <div className="row">
                        <div className="col-6 pr-0">
                            <ul className="list-group list-group-flush">
                                <li className="list-group-item">
                                    <p className='h5'>Commits today</p><small className='text-muted'>Last commit:<span className='mx-1'>{this.state.hash}</span></small>
                                </li>
                                <li className="list-group-item">
                                    <p className='h5'>Most recent blog post</p>
                                    <small className='text-muted'>Published:<span className='mx-1'>{this.state.publishedDate}</span></small>
                                </li>
                            </ul>
                        </div>

                        <div className="col-6 pl-0">
                            <ul className="list-group list-group-flush">
                                <li className="list-group-item border-left d-flex align-items-end justify-content-center"><p>{this.state.commits}</p></li>
                                <li className="list-group-item border-left d-flex align-items-end justify-content-center" ><p className="text-truncate">{this.state.post}</p></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>

        );
    }
}