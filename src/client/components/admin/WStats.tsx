import * as React from 'react';
import json from '../../utils/api';

export default class DStats extends React.Component<any, any> {

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
                            <li className="list-group-item">38</li>
                            <li className="list-group-item">17</li>
                            <li className="list-group-item">3</li>
                            <li className="list-group-item">1</li>
                            <li className="list-group-item">2</li>
                            <li className="list-group-item">63,425</li>
                        </ul>
                    </div>

                </div>
            </React.Fragment>)
    }
}