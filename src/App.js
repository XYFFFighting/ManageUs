import React, { Component } from 'react';
// import { Link } from 'react-router';
import authFetch from './utils/authFetch';
import Join from './components/Join';
import CreateHousehold from './components/CreateHousehold';
import Base from './components/Base.js'
import "./index.css"


class App extends Component {
    constructor(props) {
        super(props);

        this.state = {
            household: null,
            fetchingHousehold: true,
            error: false
        };

        this.fetchHousehold = this.fetchHousehold.bind(this);
    }

    componentDidMount() {
        this.fetchHousehold();
    }

    async fetchHousehold() {
        if(this.state.fetchingHousehold !== true) {
            this.setState({
                fetchingHousehold: true
            });
        }

        const householdResp = await authFetch.bind(this)('/api/households');
        if(householdResp.ok) {
            this.setState({
                fetchingHousehold: false,
                household: await householdResp.json()
            });
        } else {
            // not okay
            this.setState({
                household: null,
                fetchingHousehold: false,
                error: (householdResp.status === 404)
            });
        }
    }

    render() {
        if(this.state.fetchingHousehold) {
            return (
                <h1> LOADING </h1>
            );
        }

        if(!this.state.household) {
            return (
                <div className="flex-container">
                    <CreateHousehold fetchHousehold={this.fetchHousehold} />
                    <Join fetchHousehold={this.fetchHousehold} />
                </div>
            );
        }

        return (
            <div className="App">
                <Base />
            </div>
        );
    }
}

export default App;
