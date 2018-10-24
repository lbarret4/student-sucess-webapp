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
            End: /* moment().add(1, 'w').format('YYYY-MM-DD') */'2018-10-24',
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
            let id = User.userid;
            let data = await json(`/api/blogs/find`, 'POST', { userid: id });
            let linkBlog = await data[0]["heroku_link"];

            let [
                WeeklyStats1,
                WeeklyStats2,
                WeeklyStats3,
                WeeklyStats4,
                WeeklyStats5,
                blogs
            ] = await Promise.all(
                [
                    json(`/api/q/numbercommitwk/${id}/${Start}/${End}`),
                    json(`/api/q/numberintweek/${id}/${Start}/${End}`),
                    json(`/api/q/numberjobapps/${id}/${Start}/${End}`),
                    json(`/api/q/numbermockint/${id}/${Start}/${End}`),
                    json(`/api/q/numbernetact/${id}/${Start}/${End}`),
                    json(`${await linkBlog}`)
                ]);
            let WeeklyStats6 = await this.getNumBlogWeekly(blogs, '2018-10-04', '2018-10-22');
            this.setState(
                {
                    commits: WeeklyStats1[0].NumsofCommitsaWk,
                    jobsapps: WeeklyStats3[0].count,
                    netactivites: WeeklyStats5[0].activitycount,
                    mockinterviews: WeeklyStats4[0].NumMockInt,
                    interviews: WeeklyStats2[0].NumberOfInterviews,
                    posts: WeeklyStats6
                });
        } catch (e) {
            throw (e);
        }
    }

    async getNumBlogWeekly(blogs: any, start: any, end: any) {
        try {
            let publishedBlogs = await blogs.filter((blog: any) => {
                let publishedTime = blog["__created"];
                let hasPublishedThisWeek = moment(publishedTime).isBetween(start, end, 'day', '[]');
                return hasPublishedThisWeek;
            });
            return publishedBlogs.length;
        } catch (error) {
            throw error;
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