import * as React from 'react';
import { isLoggedIn } from '../../utils/api';

export default class Footer extends React.Component {
    render() {
        return (
            <React.Fragment>
                {isLoggedIn() ?
                    <footer className="fixed-bottom"></footer>
                    :
                    <footer className="fixed-bottom bg-primary">
                        <div className="container">
                            <div className="row py-3">
                                <p className="text-white m-auto">Powered by <a className="text-white" href="https://covalence.io">Covalence</a></p>
                            </div>
                        </div>
                    </footer>
                }
            </React.Fragment>
        );
    }
}
