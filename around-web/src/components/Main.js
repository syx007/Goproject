import React from 'react';
import { Login } from './Login';
import {Home} from './Home'
import {Switch, Route} from 'react-router'
import {Register} from "./Register"


export class Main extends React.Component {
    getLogin = () => {
        return this.props.isLoggedIn ? <Home/> : <Login handleLogin = {this.props.handleLogin}/>;
    }

    render() {
        return (
            <div className="main">
                <Switch>
                    <Route exact path ="/" render = {this.getLogin}/>
                    <Route path ="/login" render = {this.getLogin}/>
                    <Route path ="/register" component = {Register}/>
                    <Route component = {Login}/>
                </Switch>
            </div>
        );
    }
}
