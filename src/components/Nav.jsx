import React, {Component} from 'react';
import {Link, IndexLink} from 'react-router';

export default class Nav extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        console.log('props',this.props);
        return (
            <div className="navbar-fixed">
                <nav>
                    <div className="nav-wrapper">
                        <IndexLink to="/" id="logo" className="brand-logo" activeClassName="active" activeStyle={{
                            fontWeight: 'bold'
                        }}>
                            <i className="fa fa-reddit-alien" aria-hidden="true"></i>Reactive Reddit</IndexLink>
                        <ul className="right hide-on-med-and-down">
                            <li>
                                <Link to="/" activeClassName="active" value="https://www.reddit.com/r/all/top/?sort=top&t=day" activeStyle={{
                                    fontWeight: 'bold'
                                }}>Top</Link>
                            </li>
                            <li>
                                <a href="badges.html">Components</a>
                            </li>
                        </ul>
                    </div>
                </nav>
            </div>
        )
    }
}
