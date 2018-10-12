
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

            <div className="container py-5 text-center ">
    
    
              <div className="card-deck d-flex justify-content-center">
    
                <div className="card mb-3" style={{ maxWidth: "22rem" }}>
                  <h5 className="card-header">Daily Tasks</h5>
                  <div className="card-body">
                    <div>
                      <input type="checkbox" id="dtask1" />
                      <label htmlFor="dtask1">Class assignments</label>
                    </div>
                    <div>
                      <input type="checkbox" id="dtask2" />
                      <label htmlFor="dtask1">Commit to GitHub</label>
                    </div>
                    <div>
                      <input type="checkbox" id="dtask3" />
                      <label htmlFor="dtask1">Make contact with Career Coach</label>
                    </div>
                  </div>
                </div>
    
                <div className="card mb-3" style={{ maxWidth: "22rem" }}>
                  <h5 className="card-header">Weekly Tasks</h5>
                  <div className="card-body">
                    <div>
                      <input type="checkbox" id="wtask1" />
                      <label htmlFor="wtask1">Submit Three Applications</label>
                    </div>
                  </div>
                </div>
    
              </div>
    
              <div className="d-flex justify-content-center">
                <h3 className="card-header border-dark"  style={{ minWidth: "44rem" }}>Weekly statistics</h3>
              </div>
    
              <div className="card-group d-flex justify-content-center">
    
                <div className="card mb-3" style={{ maxWidth: "22rem" }}>
                  <ul className="list-group list-group-flush">
                    <li className="list-group-item">Commits this week</li>
                    <li className="list-group-item">Job applications this week</li>
                    <li className="list-group-item">Networking activities attended this week</li>
                    <li className="list-group-item">Mock interviews this week</li>
                    <li className="list-group-item">Interviews this week</li>
                  </ul>
                </div>
    
                <div className="card mb-3" style={{ maxWidth: "22rem" }}>
                  <ul className="list-group list-group-flush">
                  <li className="list-group-item">38</li>
                    <li className="list-group-item">3</li>
                    <li className="list-group-item">1</li>
                    <li className="list-group-item">2</li>
                    <li className="list-group-item">63,425</li>
                  </ul>
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