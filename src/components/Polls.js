import React,{Component} from 'react';

class Polls extends Component {
    render () {
        return (
            <a href="/Polls"
               className="list-group-item list-group-item-action flex-column align-items-start" id="Grocery">
                <span className="badge badge-primary badge-pill">1 day ago</span>
                <h5 className="mb-1">Poll</h5>
                <p className="mb-1">add some thing here</p>
                <small>by XXX</small>
            </a>
        );
    }
}

export default Polls;