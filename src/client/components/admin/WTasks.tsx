
import * as React from 'react';
import json from '../../utils/api';
import { number } from 'prop-types';

export default class WTasks extends React.Component<any, IWTasks> {

    constructor(props: any) {
        super(props);
        this.state = {
            wtask1: true,
            wtask2: false,
            date: 28
        };
    }

    storeIt() {
        // stores all state values to database
    }

    w1True() {
        return this.state.wtask1
    }
    w2True() {
        return this.state.wtask2
    }

    wTask1() {
        if (this.state.wtask1) {
            this.setState({ wtask1: false })
        } else {
            this.setState({ wtask1: true })
        }
        this.storeIt()
    }
    wTask2() {
        if (this.state.wtask2) {
            this.setState({ wtask2: false })
        } else {
            this.setState({ wtask2: true })
        }
        this.storeIt()
    }

    componentWillMount() {
        // get database values for checkboxes and date they were last stored
        let d = new Date()
        let day = d.getDay()
        let date = d.getDate()
        if (day === 0) {
            if (date != this.state.date) {
                this.setState({
                    date,
                    wtask1: false,
                    wtask2: false
                })
                this.storeIt()
            }
        }
    }

    render() {
        return (
            <React.Fragment>
                <div className="card task mb-3 shadow">
                    <h5 className="card-header">Weekly Tasks</h5>
                    <div className="card-body">
                        <div>
                            {this.w1True() ? <input type="checkbox" id="wtask1" checked onChange={(e) => { this.wTask1() }} /> : <input type="checkbox" id="wtask1" onChange={(e) => { this.wTask1() }} />}
                            <label htmlFor="wtask1">Submit Three Applications</label>
                        </div>
                        <div>
                            {this.w2True() ? <input type="checkbox" id="wtask2" checked onChange={(e) => { this.wTask2() }} /> : <input type="checkbox" id="wtask2" onChange={(e) => { this.wTask2() }} />}
                            <label htmlFor="wtask2">Post you your Developer Blog</label>
                        </div>
                    </div>
                </div>
            </React.Fragment>
        );
    }
}

interface IWTasks {
    wtask1: boolean,
    wtask2: boolean,
    date: number
}