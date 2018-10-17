import * as React from 'react';
import json from '../../utils/api';

export default class DStats extends React.Component<any, any> {

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
                            <li className="list-group-item">5</li>
                        </ul>
                    </div>
                </div>
            </React.Fragment>
        )
    }
}