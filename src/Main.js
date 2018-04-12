import React, { Component } from "react";
import {
    Route,
    NavLink,
    HashRouter
} from "react-router-dom";
import LoginPanel from "./components/LoginPanel"
import App from "./App"
import Intro from "./Bottom"

class Main extends Component {
    render() {
        return (
        <HashRouter>
            <div>
                <h1>Manage Us</h1>
                <ul className="header">
                    <li><NavLink to="/Login">Login</NavLink></li>
                </ul>
                <div className="content">
                    <Route path="/Login" component={LoginPanel}/>
                    <Route path="/App" component={App}/>
                </div>
                <div className="contact">
                    <Route path="/" component={Intro}/>
                </div>
            </div>
        </HashRouter>
        )
    }
}

export default Main;