
import * as React from 'react';
import json from '../../utils/api';

export default class DTasks extends React.Component<any, any> {

    render() {
        return (
            <React.Fragment>
                <div className="card mb-3" style={{ maxWidth: "22rem" }}>
                    <h5 className="card-header">Daily Tasks</h5>
                    <div className="card-body">
                        <div>
                            <input type="checkbox" id="dtask1" />
                            <label htmlFor="dtask1">{}Class assignments</label>
                        </div>
                        <div>
                            <input type="checkbox" id="dtask2" />
                            <label htmlFor="dtask1">{}Commit to GitHub</label>
                        </div>
                        <div>
                            <input type="checkbox" id="dtask3" />
                            <label htmlFor="dtask1">{}Make contact with Career Coach</label>
                        </div>
                    </div>
                </div>
            </React.Fragment>
        );
    }
}