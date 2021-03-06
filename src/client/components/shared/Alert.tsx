import * as React from 'react';

const MSG_TYPE_CLASS = ['alert-danger', 'alert-info', 'alert-success']

export default class Alert extends React.Component<IAlertProps>{

    render() {
        let closeBtn:IAlertProps["closeBtn"] = this.props.closeBtn || false;
        return (
            <div className={`alert ${MSG_TYPE_CLASS[this.props.messageType]} alert-dismissible fade show`} role="alert">
                {this.props.message}
              { closeBtn? <button type="button" className="close" data-dismiss="alert" aria-label="Close">
                    <span aria-hidden="true">&times;</span>
                </button> :null}             
            </div>
        );
    }
}

export interface IAlertProps {
    message: string;
    messageType: MessageTypes;
    closeBtn?:boolean;
}

export enum MessageTypes {
    Error = 0,
    Info = 1,
    Success = 2
}