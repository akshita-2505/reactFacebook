import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Redirect, Switch } from "react-router-dom";
import Home from './components/home/Home';
import Login from "./components/Login";
import Signup from "./components/signup/Signup";
import { Provider } from 'react-redux'
import store from "./store";
import Profile from "./components/profile/Profile";

const PrivateRoute = ({component: Component, ...props}) => (
    <Route
        {...props}
        render={innerProps =>
            localStorage.getItem('isAuth') ?
                <Component {...innerProps} />
                :
                <Redirect from='/' to="home"/>
        }
    />
);

function App() {
    return (
        <Provider store={store}>
            <Router>
                <div>
                    <Switch>
                        <Route exact path='/home' component={Home}/>
                        <Route exact path='/login' component={Login}/>
                        <Route exact path='/signup' component={Signup}/>
                        <PrivateRoute exact path='/profile' component={Profile}/>
                        <Redirect from='/' to="home"/>
                    </Switch>
                </div>
            </Router>
        </Provider>
    );
}

export default App;
