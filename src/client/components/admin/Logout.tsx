import * as React from 'react';
import { Redirect } from 'react-router-dom';
import { ClearAccessToken } from '../../utils/api';


export default class Logout extends React.Component<any, ILogOutState> {

    constructor(props: any) {
        super(props);
        this.state = {
            loggedOut: false
        };
    }

    componentDidMount() {
        ClearAccessToken();
        this.setState({ loggedOut: true });
    }

    render() {
        return <Redirect to="/" />;
    }
}


interface ILogOutState {
    loggedOut: boolean;
}