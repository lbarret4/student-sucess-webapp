
import * as React from 'react';
import json from '../../utils/api';

export default class WTasks extends React.Component<any, any> {

    render() {
        return (
            <React.Fragment>
                <div className="card task mb-3 shadow">
                            <h5 className="card-header">Weekly Tasks</h5>
                            <div className="card-body">
                                <div>
                                    <input type="checkbox" id="wtask1" />
                                    <label htmlFor="wtask1">Submit Three Applications</label>
                                </div>
                                <div>
                                    <input type="checkbox" id="wtask2" />
                                    <label htmlFor="wtask2">Post you your Developer Blog</label>
                                </div>
                            </div>
                        </div>
            </React.Fragment>
        );
    }
}