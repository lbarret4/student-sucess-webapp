import * as React from 'react';
import { Switch, Route } from 'react-router'
import { RouteComponentProps, NavLink } from 'react-router-dom';


export default class NavTabs extends React.Component<INavTabsProps> {


    render() {

        let tabs = this.props.formTabs;

        let navList = tabs.map((tab, index) => {
            let path = (tab === 'Career Services' ? `/forms/Career-Services` : '/forms/');
            if (tab === 'Network' || tab === 'Career Services') {
                return (
                    <li className="nav-item" >
                        <NavLink exact to={path} className='nav-link' activeClassName='active' key={index}>{`${tab} Forms`}</NavLink>
                    </li >
                );
            } else {
                return (
                    <li className="nav-item" >
                        <NavLink to={`${path+tab}`} className='nav-link' activeClassName='active' key={index}>{`${tab} Forms`}</NavLink>
                    </li >
                );

            }

        });

        return (

            <div className="card-header" >
                <ul className="nav nav-tabs card-header-tabs">
                    {navList}
                </ul>
            </div>

        );
    }

}



interface INavTabsProps {
    formTabs: string[]
}
