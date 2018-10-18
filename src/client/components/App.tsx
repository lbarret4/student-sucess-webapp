import * as React from 'react';
import { BrowserRouter as Router, Route} from 'react-router-dom';

import Home from './public/Home';
import Navbar from './shared/Navbar';
import Blog from './public/Blog';
import Login from './admin/Login';
import Register from './admin/Register';
import Compose from './admin/Compose';
import Footer from './shared/Footer';
import PrivateRoute from './admin/privateRoute';
import Logout from './admin/Logout';
import InputForms from './admin/InputForms';
import Dashbord from './admin/Dashboard';
// import Testing from './admin/testing'
import Profile from './admin/Profile'
import EditProfile from './admin/EditProfile'
import Calender from './admin/Calendar'

export default class App extends React.Component {
    render() {
        return (
            <Router>
                <>
                <Navbar></Navbar>
                <Profile></Profile>
                <Route exact path="/" component={Home} />
                <Route path="/blog/:blogId" component={Blog} />
                <PrivateRoute exact path= "/dashboard" component={Dashbord} />
                <Route exact path="/login" component={Login} />
                <Route exact path="/logout" component={Logout} />
                <Route exact path="/register" component={Register} />
                {/* <Route path="/testing" component={Testing} /> */}
                <Route  path="/forms" component={InputForms} />
                <PrivateRoute path="/EditProfile" component={EditProfile}/>
                <Footer></Footer>
                <PrivateRoute path="/calender" component={Calender} />
                </>
            </Router>
        );
    }
}