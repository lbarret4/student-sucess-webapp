
import * as React from 'react';

export default class DTasks extends React.Component<any, any> {

    render() {
        return (
            <React.Fragment>
                <div className="card task mb-3 shadow">
                    <h5 className="card-header">Daily Tasks</h5>
                    <div className="card-body">
                        <div>
                            <input type="checkbox" id="dtask1" />
                            <label htmlFor="dtask1"> Class assignments</label>
                        </div>
                        <div>
                            <input type="checkbox" id="dtask2" />
                            <label htmlFor="dtask2"> Commit to GitHub</label>
                        </div>
                        <div>
                            <input type="checkbox" id="dtask3" />
                            <label htmlFor="dtask3">Make contact with Career Coach</label>
                        </div>
                    </div>
                </div>
            </React.Fragment>
        );
    }
}