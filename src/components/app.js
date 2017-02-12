import React, {Component} from 'react';
// import {redditData} from '../actions/index';
import FrontPage from './RedditList';
import Nav from './Nav';
export default class App extends Component {
    constructor(props) {
        super(props);

    }
    render() {
        //   let data = redditData()
        return (
            <div>
                <Nav/>
                <div className="container">
                    {this.props.children}
                </div>

            </div>
        );
    }
}
