'use strict'
import React, {Component} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {commentsFetch} from '../actions/index';
import {Link, IndexLink} from 'react-router';

class Post extends Component {
    constructor(props) {
        super(props);
        this.state = {
            counter: this.props.ups,
            upvote: false,
            downvote: false,
            upColor: 'white',
            downColor: 'white',
            comments: ''
        }
        this.upVote = this.upVote.bind(this);
        this.downVote = this.downVote.bind(this);
        this.comments = this.comments.bind(this);
    }
    upVote() {
        if(this.state.upvote) {
            return
        }
        this.setState({
            counter: this.state.counter + 1,
            upvote: true,
            downvote: false,
            upColor: 'orange',
            downColor: 'white'
        })

    }
    downVote() {
        if(this.state.downvote) {
            return
        }
        this.setState({
            counter: this.state.counter - 1,
            downvote: true,
            upvote: false,
            upColor: 'white',
            downColor: 'orange'
        })
    }
    async comments(event) {
        // console.log(this.props.permalink);
        let link = this.props.permalink;
        // console.log('this is the link', link);
        let url = 'https://www.reddit.com' + link +'.json'
        console.log('this is the url', url);
        let load = await this.props.commentsFetch(url)
        console.log(load, `i'm the load yo`);
        // this.setState({comments: page})
}
    render() {
        let {title, data, url, thumbnail, ups, permalink} = this.props
        let {counter,upColor, downColor} = this.state;
        // console.log('this is the permalink', permalink);
        return (
            // <div className="row">
                <div className="col m3">
                    <div className="card small">
                        <div className="card-image">
                            <img src={thumbnail}/>
                        </div>
                        <div className="card-content">
                            <p>{title}</p>
                        </div>
                        <div className="card-action">
                            <a href={url}>Source</a>
                            <button onClick={this.upVote}>
                                <i className="fa fa-arrow-up" id={upColor} aria-hidden="true"></i>
                            </button>
                            <span>{counter}</span>
                            <button onClick={this.downVote}>
                                <i className="fa fa-arrow-down" id={downColor} aria-hidden="true"></i>
                            </button>
                            <Link to="/comments" id="comments" value={permalink} activeClassName="active" onClick={this.comments} activeStyle={{
                                fontWeight: 'bold'
                            }}>Comments</Link>
                        </div>
                    </div>
                </div>
            // </div>
        )
    }
}
function mapDispatchToProps(dispatch) {
    return bindActionCreators({
        commentsFetch: commentsFetch
    }, dispatch)
}
export default connect(null, mapDispatchToProps)(Post);
