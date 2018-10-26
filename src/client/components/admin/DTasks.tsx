
import * as React from 'react';

export default class DTasks extends React.Component<any, IDTasks> {

    constructor(props: any) {
        super(props);
        this.state = {
            dtask1: true,
            dtask2: false,
            dtask3: false,
            date: 0
        };
    }

    storeIt() {
      // stores all state values to database
    }

    d1True() {
        return this.state.dtask1
    }
    d2True() {
        return this.state.dtask2
    }
    d3True() {
        return this.state.dtask3
    }

    dTask1() {
        if (this.state.dtask1) {
            this.setState({ dtask1: false })
        } else {
            this.setState({ dtask1: true })
        }
        this.storeIt()
    }
    dTask2() {
        if (this.state.dtask2) {
            this.setState({ dtask2: false })
        } else {
            this.setState({ dtask2: true })
        }
        this.storeIt()
    }
    dTask3() {
        if (this.state.dtask3) {
            this.setState({ dtask3: false })
        } else {
            this.setState({ dtask3: true })
        }
        this.storeIt()
    }

    componentWillMount() {
        // get database values for checkboxes and date they were last stored
        let d = new Date()
        let date = d.getDate()
        if (date != this.state.date) {
                this.setState({
                    date,
                    dtask1: false,
                    dtask2: false
                })
                this.storeIt()
        }
    }

    render() {
        return (
            <React.Fragment>
                <div className="card task mb-3 shadow">
                    <h5 className="card-header">Daily Tasks</h5>
                    <div className="card-body">
                        <div>
                            {this.d1True() ? <input type="checkbox" id="dtask1" checked onChange={(e) => { this.dTask1() }} /> : <input type="checkbox" id="dtask1" onChange={(e) => { this.dTask1() }} />}
                            <label htmlFor="dtask1"> Class assignments</label>
                        </div>
                        <div>
                        {this.d2True() ? <input type="checkbox" id="dtask2" checked onChange={(e) => { this.dTask2() }} /> : <input type="checkbox" id="dtask1" onChange={(e) => { this.dTask2() }} />}
                            <label htmlFor="dtask2"> Commit to GitHub</label>
                        </div>
                        <div>
                        {this.d3True() ? <input type="checkbox" id="dtask3" checked onChange={(e) => { this.dTask3() }} /> : <input type="checkbox" id="dtask1" onChange={(e) => { this.dTask3() }} />}
                            <label htmlFor="dtask3">Make contact with Career Coach</label>
                        </div>
                    </div>
                </div>
            </React.Fragment>
        );
    }
}

interface IDTasks {
    dtask1: boolean,
    dtask2: boolean,
    dtask3: boolean,
    date: number
}