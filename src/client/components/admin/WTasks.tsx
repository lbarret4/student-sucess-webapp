
import * as React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import json from '../../utils/api';

import BlogListItem from '../shared/BlogListItem';

export default class WTasks extends React.Component<any, any> {

    render() {
        return (
            <React.Component>
                <div className="card mb-3" style={{ maxWidth: "22rem" }}>
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
            </React.Component>
        );
    }
}